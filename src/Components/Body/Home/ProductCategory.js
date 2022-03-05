import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCategory = () => {
    const [Categories, setcategory] = useState([]);

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const result = await axios.get("http://localhost:3004/categories");
        setcategory(result.data);
    }
    return (
        <>
            <div className="site-section site-blocks-2">
                <div className="container">
                    <div className="row">
                        {
                            Categories.map((category, index) => (
                                <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
                                    <a className="block-2-item" href="#">
                                        <figure className="image">
                                            <img src={category.Image} alt="" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="text-uppercase">Collections</span>
                                            <h3>{category.name}</h3>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCategory;