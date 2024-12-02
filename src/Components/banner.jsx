import React from "react";

function Banner () {
    return (
        <div>
            <div className="hero-banner-area home-4  hero-bg-3 parallax no-attm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                            <div className="banner-content">
                                <h1>Toilet</h1>
                                <h2>Conference 2025</h2>
                                <p>Dhaka, Bangladesh | 25-26 February 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Event Registration</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-7">
                                                <input className="form-control" type="text" placeholder="Name"
                                                       required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="form-control" type="email" placeholder="E-mail"
                                                       required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="form-control" type="text"
                                                       placeholder="Phone Number" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <input className="form-control" type="text"
                                                       placeholder="Choose Ticket" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-primary" type="submit">Register Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;