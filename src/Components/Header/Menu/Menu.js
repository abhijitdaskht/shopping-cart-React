import React from "react";

function Menu(){
    return(
        <nav className="site-navigation text-right text-md-center" role="navigation">
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className="has-children active">
                <a href="">Home</a>
                <ul className="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                  <li className="has-children">
                    <a href="#">Sub Menu</a>
                    <ul className="dropdown">
                      <li><a href="#">Menu One</a></li>
                      <li><a href="#">Menu Two</a></li>
                      <li><a href="#">Menu Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="">About</a>
                <ul className="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
              <li><a href="">Shop</a></li>
              <li><a href="#">Catalogue</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </nav>
    );
}

export default Menu;