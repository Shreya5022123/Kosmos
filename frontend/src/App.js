import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import Metaverse from './Pages/Metaverse.jsx';
import Golive from './Pages/Golive.jsx';
import VirtualTryOn from './components/ProductDisplay/VirtualTryOn.jsx';
import ProductDisplay from './components/ProductDisplay/ProductDisplay.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Shop />
              <Footer />
            </>
          }/>
          <Route path='/Mens' element={
            <>
              <Navbar />
              <ShopCategory category="men"/>
              <Footer />
            </>
          }/>
          <Route path='/Womens' element={
            <>
              <Navbar />
              <ShopCategory category="women"/>
              <Footer />
            </>
          }/>
          <Route path='/Kids' element={
            <>
              <Navbar />
              <ShopCategory category="kid"/>
              <Footer />
            </>
          }/>
          <Route path='/Product' element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          }>
            <Route path=':productId' element={
              <>
                <Navbar />
                <Product />
                <Footer />
              </>
            }/>
          </Route>
          <Route path='/Cart' element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          }/>
          <Route path='/login' element={
            <>
              <Navbar />
              <LoginSignup />
              <Footer />
            </>
          }/>
          <Route path='/metaverse' element={<Metaverse />} /> {/* Remove Navbar and Footer */}
          <Route path='/golive' element={<Golive />} /> {/* Remove Navbar and Footer */}
          <Route path='/VirtualTryOn' element={<VirtualTryOn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;