// Navbar
import "../css/bootstrap.min.css";

import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://cdn.acroford.com/acroford_logo.webp"
                        height="32px"
                        width="auto"
                        alt="Acroford Logo"
                        className="logo"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Nav;