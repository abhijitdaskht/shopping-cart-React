import React from "react";
import MenuPopup from "./MenuPopup";
import { Link } from 'react-router-dom'
import NotFound from '../../NotFound';


function Menu() {
  return (
    <>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li>
              <Link exact="true" to={'/home'} className="nav-link">Home</Link>
            </li>
            <li className="has-children">
              <Link exact="true" to={'/about'} className="nav-link">About</Link>
              <MenuPopup></MenuPopup>
            </li>
            <li className="has-children">
            <Link exact="true" to={'/shop'} className="nav-link">Shop</Link>
              <MenuPopup></MenuPopup>
            </li>
            <li className="has-children">
              <a href="#">Catalogue</a>
              <MenuPopup></MenuPopup>
            </li>
            <li className="has-children">
              <a href="#">New Arrivals</a>
              <MenuPopup></MenuPopup>
            </li>
            <li>
              {/* <a href="">Contact</a> */}
              <Link exact="true" to={'/contact'} className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;




