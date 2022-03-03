import React from "react";

function Banner() {
    return (
        <div>
            <div className="site-blocks-cover" data-aos="fade"
                style={{
                    backgroundImage: 'url("../images/hero_1.jpg")',
                }}
            >
                <div className="container">
                    <div className="row align-items-start align-items-md-center justify-content-end">
                        <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                            <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                            <div className="intro-text text-center text-md-left">
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                                <p>
                                    <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-section-sm site-blocks-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-truck"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Shipping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-refresh2"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Returns</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-help"></span>
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Customer Support</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Banner;