import React from "react";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Account from "./Account/Account";
import CompanyLogo from "./Logo/CompanyLogo";

function Header() {
    return (
        <div className="header">
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <Search></Search>
                            <CompanyLogo></CompanyLogo>
                            <Account></Account>
                        </div>
                    </div>
                </div>
                <Menu></Menu>
            </header>
        </div>
    );
}

export default Header;