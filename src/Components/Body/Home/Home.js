import React from "react";
import Banner from "./Banner";
import FeturedProduct from "./FeaturedProducts";
import ProductCategory from "./ProductCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <FeturedProduct></FeturedProduct>
        </div>
    )
}

export default Home;