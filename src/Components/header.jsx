import React from "react"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="header base-style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="brand-logo">
                                <a className="eventex-brand" href="#"><img src="assets/img/logo/logo.png"
                                                                                      alt="" width='200px'/></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                                </button>
                            </nav>
                        </div>
                        {/*<div className="col-lg-2 d-none d-lg-block">
                            <ul>
                                <li className="header-ticket">
                                    <a className="pr-0" href="https://drive.google.com/file/d/1zjs1XkIAEmtEFGAjX_GqzMl2TmHhug5Y/view?usp=sharing" target="_blank">View Tutorial</a>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header