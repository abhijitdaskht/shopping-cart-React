import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Breadcrumbs from "../Shop/Breadcrumbs";

const ShopCart = () => {
    const currentPathName = window.location.pathname;
    const path = currentPathName.split("/").pop();
    const [products, setproduct] = useState([]);
    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:3004/cartDetails");
        setproduct(result.data);
    }
    return (
        <>
            <Breadcrumbs pathname={path}></Breadcrumbs>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="">
                            <div className="site-blocks-table">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">Image</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((product, index) => (
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <img src={product.imageurl} alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">{product.name}</h2>
                                                    </td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <div className="input-group mb-3" style={{ maxWidth: 250 }}>
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
                                                            </div>
                                                            <input type="text" className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>$49.00</td>
                                                    <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12 text-right border-bottom mb-5">
                                            <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <span className="text-black">Subtotal</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <strong className="text-black">$230.00</strong>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            <span className="text-black">Total</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <strong className="text-black">$230.00</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                        <Link exact="true" to={'/checkout'} className="btn btn-primary btn-lg py-3 btn-block">
                                            Proceed To Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopCart;