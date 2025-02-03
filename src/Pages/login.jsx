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
            return navigate("/Ticket");
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
                                <h1 style={{fontSize: '88px'}}>Registration {/*<span style={{textTransform:"lowercase"}}>for</span>*/}</h1>
                                <h3 style={{marginBottom: '0', marginTop: '20px'}}>Toilet Conference 2025</h3>
                                <p style={{marginBottom: '0', marginTop: '20px'}}>Dhaka, Bangladesh | 25-26 February
                                    2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Log in</h3>
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
                                                    Log in
                                                </button>
                                            </div>
                                            {errorMessage && (
                                                <div className="col-lg-12">
                                                    <p className="text-danger">{errorMessage}</p>
                                                </div>
                                            )}
                                            <div className="p-3">
                                                <p>
                                                    You don't have an account? <Link to="/Register">Register now.</Link>
                                                </p>
                                            </div>
                                            <div className="p-3">
                                                <p>
                                                    Forget your password? <Link to="/Forget-Password">Click here!</Link>
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
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid" src="assets/img/convenors/4.png"
                                         style={{padding: '20px'}} alt="trainer-img"/>
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
                                    <h2>Gold Partners</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid"
                                         src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678c7d472a97d5cedc37cb9a_2_%20BRAC%20logo.png"
                                         alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid"
                                         src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678cd703337ee533c7c2e978_Black%20White%20Modern%20Handwritten%20Square%20Studio%20Logo%20(1).png"
                                         alt="trainer-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whos-speaking-area pad100">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-3 col-md-3 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <div className="title-text mb50 xs-mb40">
                                            <h2 style={{fontSize: "24px"}}>Tech Partner</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678f6f362931d515dd4d8813_FrogBID%20Logo-p-500.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-3 col-md-3 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <div className="title-text mb50 xs-mb40">
                                            <h2 style={{fontSize: "24px"}}>Hospitality partner</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678debd790f45434f015e1ac_intercontinental_logo_BX7-p-500.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-3 col-md-3 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center">
                                        <div className="title-text mb50 xs-mb40">
                                            <h2 style={{fontSize: "24px"}}>Payment gateway partner</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/6799d721742ca1725b5e493f_LOGO_SSLCOMMERZ-p-500.png"
                                             alt="trainer-img"/>
                                    </div>
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
                                    <h2>Contributing partner</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                            <div className="xs-mb30">
                                <div className="spk-img">
                                    <img className="img-fluid"
                                         src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/6799dcbdcff0fcdf98bcfdb1_bkash-logo-png_seeklogo-273684.png"
                                         alt="trainer-img"/>
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
