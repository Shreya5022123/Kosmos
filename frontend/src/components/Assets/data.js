import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'
import sweater from './sweater.glb'
import jeans from './jeans.glb'
import casual_clothes from './casual_clothes.glb'
import whitedress from './whitedress.glb'

let data_product = [
  {
    id: 1,
    name: "The Modern Soul unisex-adult Polyester Blend Hooded Neck Sweatshirt",
    image: p1_img,
    new_price: 1700.00,
    old_price: 2000.50,
    model: 'sweater', // Provide a value for the model property
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 999.00,
    old_price: 1200.50,
    model: 'jeans', // Provide a value for the model property
  },
  {
    id: 3,
    name: "Womens Sleeveless Sport Crop Top and Shorts Gym Fitness",
    image: p3_img,
    new_price: 600.00,
    old_price: 1000.50,
    model: 'Model 3', // Provide a value for the model property
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 700.00,
    old_price: 850.00,
    model: 'Model 4', // Provide a value for the model property
  },
];

export default data_product;