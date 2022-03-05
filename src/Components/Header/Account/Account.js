import React from "react";
import { Link } from 'react-router-dom'

const Account = () => {
    return (
        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
            <div className="site-top-icons">
                <ul>
                    <li><a href="#"><span className="icon icon-person"></span></a></li>
                    <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                    <li>
                        <Link exact="true" to={'/shop-cart'} className="site-cart">
                            <span className="icon icon-shopping_cart"></span>
                            <span className="count">1</span>
                        </Link>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                        <a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Account;