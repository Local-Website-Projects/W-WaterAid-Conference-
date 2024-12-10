import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/header";

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
            const response = await fetch("https://regtoiletconference.org/api/user_login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("userToken", result.token);  // Example token storage
                navigate("/Profile");
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
                                <h1>Toilet</h1>
                                <h2>Conference 2025</h2>
                                <p>Dhaka, Bangladesh | 25-26 February 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Guests Login</h3>
                                    <form action="#" onSubmit={(e) => e.preventDefault()}>
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
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                    onClick={handleSubmit}
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
                                                    You don't have an account? <Link to="/">Register Now.</Link>
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
        </div>
    );
}

export default Login;
