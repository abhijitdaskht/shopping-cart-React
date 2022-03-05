import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Body/Home/Home";
import About from "./Components/Body/About/About";
import ShopCart from "./Components/Body/Cart/ShopCart"
import Shop from './Components/Body/Shop/Shop';
import Shopdetails from './Components/Body/Shop/Shopdetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop-cart" element={<ShopCart/>}></Route>
            <Route path="shop-details/:id" element={<Shopdetails/>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
