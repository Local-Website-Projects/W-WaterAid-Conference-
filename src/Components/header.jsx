import React from "react";

function Header() {
    return (
        <div>
            <header className="header base-style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="brand-logo">
                                <a className="eventex-brand" href="index-2.html"><img src="assets/img/logo/logo.png"
                                                                                      alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active dropdown">
                                            <a className="nav-link dropdown-toggle" href="#">Home <span
                                                className="sr-only">(current)</span></a>
                                            <ul className="dropdown-menu animation  slideUpIn">
                                                <li>
                                                    <a href="index-2.html">Home One</a>
                                                </li>
                                                <li>
                                                    <a href="home-2.html">Home Two</a>
                                                </li>
                                                <li>
                                                    <a href="home-3.html">Home Three</a>
                                                </li>
                                                <li>
                                                    <a href="home-4.html">Home four</a>
                                                </li>
                                                <li>
                                                    <a href="home-5.html">Home Five</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                            <ul className="dropdown-menu animation  slideUpIn">
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="error-404.html">Error 404</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#">Speakers</a>
                                            <ul className="dropdown-menu animation  slideUpIn">
                                                <li>
                                                    <a href="speakers.html">Speakers</a>
                                                </li>
                                                <li>
                                                    <a href="speakers-single.html">Speakers Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#">Events</a>
                                            <ul className="dropdown-menu animation  slideUpIn">
                                                <li>
                                                    <a href="event-schedule.html">Event Schedule</a>
                                                </li>
                                                <li>
                                                    <a href="event-table.html">Event Table</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#">Blog</a>
                                            <ul className="dropdown-menu animation  slideUpIn">
                                                <li>
                                                    <a href="blog-single.html">Blog Single</a>
                                                </li>
                                                <li>
                                                    <a href="blog-right.html">Blog Right</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="shopping.html">Shop</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <ul>
                                <li className="header-ticket">
                                    <a className="pr-0" href="#">Buy Ticket</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header