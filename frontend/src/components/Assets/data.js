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
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.00,
    old_price: 80.50,
    model: 'sweater', // Provide a value for the model property
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 85.00,
    old_price: 120.50,
    model: 'jeans', // Provide a value for the model property
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: 60.00,
    old_price: 100.50,
    model: 'Model 3', // Provide a value for the model property
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100.00,
    old_price: 150.00,
    model: 'Model 4', // Provide a value for the model property
  },
];

export default data_product;