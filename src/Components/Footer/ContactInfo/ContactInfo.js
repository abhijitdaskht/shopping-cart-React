import React from "react";

function ContactInfo() {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                    <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                    <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                    <li className="email">emailaddress@domain.com</li>
                </ul>
            </div>

            <div className="block-7">
                <form action="#" method="post">
                    <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                    <div className="form-group">
                        <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                        <input type="submit" className="btn btn-sm btn-primary" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactInfo;