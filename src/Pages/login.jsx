import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setError("You are already logged in.");
            return navigate("/Profile");
        }

        if (!email || !password) {
            setErrorMessage("Both fields are required!");
            return;
        }

        try {
            const response = await fetch("/api/user_login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            // Handle the result based on the 'status' field from PHP
            if (result.status === 'success') {
                localStorage.setItem("userToken", result.token);  // Store token
                navigate("/Ticket");
            } else {
                setErrorMessage(result.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <Header/>
            <div className="hero-banner-area home-4 hero-bg-3 parallax no-attm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                            <div className="banner-content">
                                <h1>Registration <span style={{fontSize: '20px'}}>for</span></h1>
                                <h2>Toilet Conference 2025</h2>
                                <p>Dhaka, Bangladesh | 25-26 February 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Login</h3>
                                    <form
                                        action="#"
                                        onSubmit={(e) => {
                                            e.preventDefault(); // Prevent default form submission
                                            handleSubmit(); // Call your custom handleSubmit function
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label>Email</label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    placeholder="Please enter your email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <label>Password</label>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Please choose a strong password"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <button
                                                    className="btn-primary"
                                                    type="submit"
                                                    name="submit"
                                                    id="submit"
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                            {errorMessage && (
                                                <div className="col-lg-12">
                                                    <p className="text-danger">{errorMessage}</p>
                                                </div>
                                            )}
                                            <div className="p-3">
                                                <p>
                                                    You don't have an account? <Link to="/Register">Register Now.</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whos-speaking-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text mb50 xs-mb40">
                                    <h2>Convenors</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/1.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/2.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/3.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/4.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whos-speaking-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text mb50 xs-mb40">
                                    <h2>Supporters</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/5.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/6.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/7.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/8.png" alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/9.png" alt="trainer-img"/>
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

export default Login;
