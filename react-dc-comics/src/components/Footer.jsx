import React, { Fragment } from "react";
import "./Footer.css";
import FooterMenuObj from "../data/FooterMenuObj";
import FooterListMenu from "./FooterListMenu";

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="nav-footer-container">
                        <nav>
                            {FooterMenuObj.map((footerMenuObj) => (
                                <FooterListMenu key={footerMenuObj.id} footerMenuObj={footerMenuObj} />
                            ))}
                        </nav>
                        <div className="dc-footer-logo"></div>
                    </div>
                </div>
                <section className="social">
                    <div className="container">
                        <div className="social-container">
                            <button>SIGN-UP NOW!</button>
                            <div className="social-link">
                                <h3>FOLLOW US</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="/footer-facebook.png" alt="facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/footer-twitter.png" alt="twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/footer-youtube.png" alt="youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/footer-pinterest.png" alt="pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/footer-periscope.png" alt="periscope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
