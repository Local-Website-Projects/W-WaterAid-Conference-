import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function TicketPurchase() {
    const [user_id, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }

            try {
                const response = await axios.get("https://conference.frogbid.com/api/fetch_profile.php", {
                    headers: {
                        "Authorization": `Bearer ${token}` // Send token as a Bearer token
                    }
                });

                if (response.data.status === "success") {
                    setUsername(response.data.user_id);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        fetchSessionData();
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
                                            <Link className="nav-link" to="/Ticket">Ticket Purchase </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="">Logout </a>
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
                                    <h2>Hi, Mugdho</h2>
                                    <ol className="breadcrumb">
                                        <li>Purchase Ticket</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="mt-5 mb-3">Please fill up the form to continue purchasing tickets </h2>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <lable>Nationality</lable>
                            <input className="form-control" type="text" name="nationality"
                                   placeholder="e.g., Bangladeshi" required
                                   autoComplete="off"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <lable>City of current residence</lable>
                            <input className="form-control" type="text" name="city"
                                   placeholder="e.g., Dhaka, Bangladesh" required
                                   autoComplete="off"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Name of organisation/ institution</lable>
                            <input className="form-control" type="text" name="organization"
                                   placeholder="e.g., WaterAid" required
                                   autoComplete="off"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Designation</lable>
                            <input className="form-control" type="text" name="designation"
                                   placeholder="e.g., Student" required
                                   autoComplete="off"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Do you need visa invitation letter?</lable>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="invitation"
                                       id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="invitation"
                                       id="flexRadioDefault2" checked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Provide passport number</lable>
                            <input className="form-control" type="text" name="passport"
                                   placeholder="" required
                                   autoComplete="off"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Dietary Preferences</lable>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="dietary"
                                       id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="dietary"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Non-Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="dietary"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Vegan
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="dietary"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Not applicable
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="dietary"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                            <lable>Accessibility Needs</lable>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="accessibility"
                                       id="flexRadioDefault1" checked/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Wheelchair access
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="accessibility"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Visual aids
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="accessibility"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Sign language interpretation
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="accessibility"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Not applicable
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="accessibility"
                                       id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3 mb-5">
                            <button className="btn-primary" type="button" name="submit" id="submit">Purchase Now
                            </button>
                            <button className="btn-primary ml-3" type="button" name="submit" id="submit">Save for Later
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer/>
        </div>
    );
}

export default TicketPurchase