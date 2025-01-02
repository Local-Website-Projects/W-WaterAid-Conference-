import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../Components/footer";
import axios from "axios";

function Roombooking () {
    return (
        <div>
            <div className="main-container">
                <header className="header base-style-2 white-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="brand-logo">
                                    <a className="eventex-brand" href="index-2.html"><img
                                        src="assets/img/logo/logo-3.png" alt=""/></a>
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
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Profile">Profile</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Ticket">Ticket Purchase </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Accommodation">Accommodation
                                                    Offer </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Logout">Logout </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50">
                                        <h2>Exclusive Hotel Accommodation Offer for Conference Participants!</h2>
                                        <p className="pt-5">We are excited to announce a special partnership with the
                                            Intercontinental Hotel, Dhaka for participants of the Toilet Conference
                                            2025.</p>
                                        <p>While booking your stay through our registration portal you will enjoy an
                                            exclusive 50% discount on room rates at the Intercontinental Hotel. This
                                            offer is available only for conference attendees!</p>
                                        <p>After completing your room booking request, you will receive a promo code via
                                            email to redeem your discount directly with the hotel.</p>
                                        <p>Don’t miss out on this opportunity to enjoy premium accommodation at half the
                                            price while attending the conference. Secure your spot now and make your
                                            stay comfortable and convenient!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/1.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/2.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/10.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/4.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/5.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/6.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/7.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/8.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/team/9.jpg" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="primary-btn text-center mt-5">
                            <a href="#" className="btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Roombooking