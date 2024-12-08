import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";  // Import the useNavigate hook

function Profile() {
    const [user_id, setUserId] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [studentStatus, setStudentStatus] = useState("");
    const [studentVerification, setStudentVerification] = useState("");
    const [userName, setUserName] = useState("");
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
                    setUserId(response.data.user_id);
                    setEmailStatus(response.data.emailStatus);
                    setStudentStatus(response.data.studentStatus);
                    setUserName(response.data.userName);
                    setStudentVerification(response.data.studentVerification);
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
                                            <li>Information Page</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 mb-3">
                    <div className="row">
                        {emailStatus == 0 ? (
                            <div className="col-12">
                                <div className="alert alert-warning" role="alert">
                                    Please click{" "}
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()} // Prevent reload
                                        className="alert-link"
                                    >
                                        here
                                    </a>{" "}
                                    to verify your email.
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}

                        {studentVerification == 0 && studentStatus == 1 ? (
                            <div className="col-12">
                                <div className="alert alert-warning" role="alert">
                                    Are you a student? Please click <a href="#" className="alert-link">here</a> to
                                    verify your
                                    studentship.
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Profile;
