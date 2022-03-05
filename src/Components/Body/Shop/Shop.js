import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom'
import Breadcrumbs from "./Breadcrumbs"

const Shop = () => {
    const [products,setproduct] = useState([]);
    const currentPathName = window.location.pathname;
    const path = currentPathName.split("/").pop();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:3004/products");
        setproduct(result.data);
    }

    return (
        <>
            <Breadcrumbs pathname={path}></Breadcrumbs>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 order-2">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                    <div className="d-flex">
                                        <div className="dropdown mr-1 ml-md-auto">
                                            <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Latest
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                                <a className="dropdown-item" href="#">Men</a>
                                                <a className="dropdown-item" href="#">Women</a>
                                                <a className="dropdown-item" href="#">Children</a>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                                <a className="dropdown-item" href="#">Relevance</a>
                                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Price, low to high</a>
                                                <a className="dropdown-item" href="#">Price, high to low</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">{
                                products.map((product, index) => (
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                        <div className="block-4 text-center border">
                                            <figure className="block-4-image">
                                                <Link to={`/shop-details/${product.id}`}>
                                                    <img src={product.imageurl} alt="Image placeholder" className="img-fluid" />
                                                </Link>
                                            </figure>
                                            <div className="block-4-text p-4">
                                                <h3>
                                                    <Link to={`/shop-details/${product.id}`}>
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className="mb-0">{product.desc}</p>
                                                <p className="text-primary font-weight-bold">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            <div className="row" data-aos="fade-up">
                                <div className="col-md-12 text-center">
                                    <div className="site-block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
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

export default Shop;