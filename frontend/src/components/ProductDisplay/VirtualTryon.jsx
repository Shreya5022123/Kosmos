import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
// import data_product from '../Assets/data_product.js';

const VirtualTryon = ({ props }) => {
    const {product}=props;
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const [orbitControls, setOrbitControls] = useState(null);
  const [dragControls, setDragControls] = useState(null);
  const [transformControls, setTransformControls] = useState(null);
  const [controller, setController] = useState(null);
  const [model, setModel] = useState(null);
  const [objects, setObjects] = useState([]);
  const [defaultEnvironment, setDefaultEnvironment] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const container = containerRef.current;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    // Load the default environment
    new RGBELoader()
     .setPath('textures/equirectangular/')
     .load('royal_esplanade_1k.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        defaultEnvironment = texture;
        scene.environment = defaultEnvironment;
      });

    // Load the 3D model based on the product
    loadModel(product.model);
  };

  const animate = () => {
    renderer.render(scene, camera);
  };

  const loadModel = (modelName) => {
    const loader = new GLTFLoader();
    loader.load(`${product.model}.glb`, (gltf) => {
      model = gltf.scene;
      model.position.set(0, 0, -2);
      scene.add(model);
      objects.push(model);
  
      // Initialize transform controls
      transformControls = new TransformControls(camera, renderer.domElement);
      transformControls.attach(model);
      scene.add(transformControls);
  
      transformControls.addEventListener('dragging-changed', (event) => {
        orbitControls.enabled =!event.value;
      });
    });
  };

  return (
    <div ref={containerRef}>
      <div id="controls">
        <button id="translate">Translate</button>
        <button id="rotate">Rotate</button>
        <button id="scale">Scale</button>
      </div>
    </div>
  )
}