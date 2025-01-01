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
                                <h1>Register <span style={{fontSize: '20px'}}>for</span> Toilet</h1>
                                <h2>Conference 2025</h2>
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
            <div className="conference-synopsis-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 xs-mb40">
                            <img className="img-fluid" src="assets/img/mockup/man.png" alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="inner-content" style={{textAlign: "justify"}}>
                                <div className="section-title">
                                    <div className="title-text pl">
                                        <h2>Conference Synopsis</h2>
                                    </div>
                                </div>
                                <p>The Toilet Conference 2025 is a global initiative focused on transforming the future
                                    of sanitation and hygiene. Organised by WaterAid Bangladesh, the conference brings
                                    together experts, policymakers, researchers, and advocates to address critical
                                    challenges in water, sanitation, and hygiene (WASH). It serves as a platform for
                                    fostering collaboration, sharing innovations, and discussing strategies to ensure
                                    equitable access to sustainable sanitation solutions worldwide. By advancing key
                                    global goals such as SDG 6 (Clean Water and Sanitation), the conference aims to
                                    drive impactful change, promote health and well-being, and raise awareness about the
                                    importance of toilets in achieving social and environmental sustainability. This
                                    unique event includes technical sessions, workshops, networking opportunities,
                                    technical tours and knowledge-sharing, emphasizing the role of sanitation in
                                    improving public health, education, gender equity, and economic development. The
                                    conference is scheduled to take place on 25-26 February 2025 at Intercontinental
                                    Dhaka.
                                </p>

                                <p>Join us at the Toilet Conference 2025, a groundbreaking global event dedicated to
                                    advancing sanitation and hygiene for a healthier and more sustainable future. Secure
                                    your spot now and become part of a movement that’s shaping the future of public
                                    health and sustainable development. Do not miss this chance to make an impact,
                                    register today!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-tables-area bg-color pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text mb50">
                                    <h2>Pricing Tables</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing xs-mb30">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 55
                                    </div>
                                </div>
                                <div className="pricing-title">Personal</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing xs-mb30">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 75
                                    </div>
                                </div>
                                <div className="pricing-title">Business</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 99
                                    </div>
                                </div>
                                <div className="pricing-title">Premium</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-schedule-area-two pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text">
                                    <h2>Waiver</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th className="text-center" scope="col">Waiver Rate</th>
                                                <th scope="col">Category</th>
                                                <th className="text-center" scope="col">Purchase</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>25%</span>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Reviewer</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>50% / 25%</span>
                                                        <p>Main Author / Co Authors</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Abstract</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>100%</span>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Rapporteur</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>100%</span>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Volunteer</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>100%</span>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Media fellowship</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>50% / 25%</span>
                                                        <p>Host Organisation / Co host organisation</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="">Technical sessions</a></h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Purchase Ticket</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
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

export default Login;
