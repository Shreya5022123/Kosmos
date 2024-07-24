import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { XREstimatedLight } from 'three/addons/webxr/XREstimatedLight.js';
import { DragControls } from 'three/addons/controls/DragControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import sweater from '../Assets/sweater.glb';

const VirtualTryOn = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const orbitControlsRef = useRef(null);
  const dragControlsRef = useRef(null);
  const transformControlsRef = useRef(null);
  const controllerRef = useRef(null);
  const modelRef = useRef(null);
  const defaultEnvironmentRef = useRef(null);
  const objectsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );
    cameraRef.current = camera;

    const defaultLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    defaultLight.position.set(0.5, 1, 0.25);
    scene.add(defaultLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const xrLight = new XREstimatedLight(renderer);

    xrLight.addEventListener("estimationstart", () => {
      scene.add(xrLight);
      scene.remove(defaultLight);
      if (xrLight.environment) {
        scene.environment = xrLight.environment;
      }
    });

    xrLight.addEventListener("estimationend", () => {
      scene.add(defaultLight);
      scene.remove(xrLight);
      scene.environment = defaultEnvironmentRef.current;
    });

    new RGBELoader()
      .setPath("textures/equirectangular/")
      .load("royal_esplanade_1k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        defaultEnvironmentRef.current = texture;
        scene.environment = defaultEnvironmentRef.current;
      });

    const arButton = ARButton.createButton(renderer, {
      optionalFeatures: ["light-estimation"],
    });
    arButton.addEventListener("click", setupARControls);
    document.body.appendChild(arButton);

    const loader = new GLTFLoader();

    loader.load(
      sweater,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, -2);
        scene.add(model);
        objectsRef.current.push(model);
        modelRef.current = model;

        const transformControls = new TransformControls(camera, renderer.domElement);
        transformControls.attach(model);
        scene.add(transformControls);
        transformControlsRef.current = transformControls;

        transformControls.addEventListener("dragging-changed", function (event) {
          orbitControls.enabled = !event.value;
        });
      },
      undefined,
      function (error) {
        console.error("An error occurred while loading the model:", error);
      }
    );

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.target.set(0, 0, -2);
    orbitControls.update();
    orbitControlsRef.current = orbitControls;

    const dragControls = new DragControls(objectsRef.current, camera, renderer.domElement);
    dragControls.addEventListener("dragstart", function (event) {
      orbitControls.enabled = false;
    });
    dragControls.addEventListener("dragend", function (event) {
      orbitControls.enabled = true;
    });
    dragControlsRef.current = dragControls;

    const controller = renderer.xr.getController(0);
    controller.addEventListener("select", onSelect);
    scene.add(controller);
    controllerRef.current = controller;

    window.addEventListener("resize", onWindowResize);

    const translateButton = document.getElementById("translate");
    const rotateButton = document.getElementById("rotate");
    const scaleButton = document.getElementById("scale");

    if (translateButton) {
      translateButton.addEventListener("click", () => {
        transformControlsRef.current.setMode("translate");
      });
    }

    if (rotateButton) {
      rotateButton.addEventListener("click", () => {
        transformControlsRef.current.setMode("rotate");
      });
    }

    if (scaleButton) {
      scaleButton.addEventListener("click", () => {
        transformControlsRef.current.setMode("scale");
      });
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const setupARControls = () => {
    const { transformControls, orbitControls, dragControls, renderer } = {
      transformControls: transformControlsRef.current,
      orbitControls: orbitControlsRef.current,
      dragControls: dragControlsRef.current,
      renderer: rendererRef.current,
    };

    if (transformControls && orbitControls && dragControls) {
      renderer.xr.addEventListener("sessionstart", () => {
        transformControls.enabled = true;
        orbitControls.enabled = true;
        dragControls.enabled = true;
      });

      renderer.xr.addEventListener("sessionend", () => {
        transformControls.enabled = false;
        orbitControls.enabled = false;
        dragControls.enabled = false;
      });
    } else {
      console.error("Controls are not initialized properly");
    }
  };

  const onSelect = () => {
    const { model, controller } = {
      model: modelRef.current,
      controller: controllerRef.current,
    };

    if (model) {
      model.position.set(0, 0, -2).applyMatrix4(controller.matrixWorld);
      model.quaternion.setFromRotationMatrix(controller.matrixWorld);
    }
  };

  const onWindowResize = () => {
    const { camera, renderer } = {
      camera: cameraRef.current,
      renderer: rendererRef.current,
    };

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    const { scene, camera, renderer } = {
      scene: sceneRef.current,
      camera: cameraRef.current,
      renderer: rendererRef.current,
    };
    renderer.render(scene, camera);
  };

  return (
    <div>
      <div ref={containerRef}></div>
      <button id="translate">Translate</button>
      <button id="rotate">Rotate</button>
      <button id="scale">Scale</button>
    </div>
  );
};

export default VirtualTryOn;
