import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import Promo from "./Promo/Promo";
import FooterNavigation from "./Navigation/FooterNavigation";

function Footer() {
    return (
        <footer className="site-footer border-top">
            <div className="container">
                <div className="row">
                    <FooterNavigation></FooterNavigation>
                    <Promo></Promo>
                    <ContactInfo></ContactInfo>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>
                            Copyright &copy;<script data-cfasync="false" src="#"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;