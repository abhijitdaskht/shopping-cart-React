import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuPopup from "./MenuPopup";
import { Link } from 'react-router-dom'
import NotFound from '../../NotFound';


const Menu = () => {
  const [menus, setmenu] = useState([]);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    const result = await axios.get("http://localhost:3004/menus");
    setmenu(result.data);
  }
  return (
    <>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            {
              menus.map((menu, index) => (
                <li className={menu.isSubmenu ? ("has-children") : ('')}>
                  <Link exact="true" to={menu.path} className="nav-link">{menu.name}</Link>
                  {menu.isSubmenu ? (
                    <MenuPopup></MenuPopup>
                  ) : ('')}
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;




