
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory category="men"/>}/>
        <Route path='/Womens' element={<ShopCategory category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
