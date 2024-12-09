import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function TicketPurchase() {
    const [user_id, setUsername] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            /*if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }*/

            try {
                const response = await axios.get("https://conference.frogbid.com/api/fetch_profile.php", {
                    headers: {
                        "Authorization": `Bearer ${token}` // Send token as a Bearer token
                    }
                });

                if (response.data.status === "success") {
                    setUsername(response.data.user_id);
                    setUserName(response.data.userName);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        fetchSessionData();
        // Set up polling
        const interval = setInterval(fetchSessionData, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [navigate]);
    return (
        <div>
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
                                            <Link className="nav-link" to="/Logout">Logout </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="about-us-area pad-head bg-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content">
                                <div className="section-title text-center">
                                    <h2>Hi, {userName}</h2>
                                    <ol className="breadcrumb">
                                        <li>Purchase Ticket</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ct-2 contact-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div className="title-text pl">
                                    <h2>Get in Touch</h2>
                                    <p>Get In Touch With The Financial Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form">
                                                <div className="form-group">
                                                    <input id="inputName" type="text" name="name"
                                                           className="form-control" placeholder="Name" required
                                                           data-error="Enter your name"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group">
                                                    <input id="inputEmail" type="email" name="email"
                                                           className="form-control" placeholder="Email" required
                                                           data-error="Enter your email"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group">
                                                    <input id="inputSubject" type="text" name="subject"
                                                           className="form-control" placeholder="Subject" required
                                                           data-error="Enter your email"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group">
                                                        <textarea id="inputMessage" name="message"
                                                                  className="form-control" placeholder="Massage"
                                                                  rows="5" required
                                                                  data-error="Enter message with details"></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="btn-2">
                                                    <button className="btn-primary" name="submit-form"
                                                            type="submit">Send
                                                    </button>
                                                </div>
                                            </form>
                                            <div id="msgalert" className="hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default TicketPurchase