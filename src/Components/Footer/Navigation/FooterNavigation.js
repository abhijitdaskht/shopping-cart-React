import React from "react";

const FooterNavigation = () => {
    return (
        <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                        <li><a href="#">Sell online</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Shopping cart</a></li>
                        <li><a href="#">Store builder</a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                        <li><a href="#">Mobile commerce</a></li>
                        <li><a href="#">Dropshipping</a></li>
                        <li><a href="#">Website development</a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ul className="list-unstyled">
                        <li><a href="#">Point of sale</a></li>
                        <li><a href="#">Hardware</a></li>
                        <li><a href="#">Software</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterNavigation;