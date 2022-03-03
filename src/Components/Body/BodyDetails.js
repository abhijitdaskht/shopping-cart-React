import React from "react";
import Banner from "./Home/Banner";
import FeturedProduct from "./Home/FeaturedProducts";
import ProductCategory from "./Home/ProductCategory";

function BodyDetails() {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <FeturedProduct></FeturedProduct>
        </div>
    );
}

export default BodyDetails;