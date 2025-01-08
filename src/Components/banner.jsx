import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Banner() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission

        // Basic form validation
        if (email.length === 0) {
            alert("Email cannot be empty!");
        } else if (password.length === 0) {
            alert("Password cannot be empty!");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long!");
        } else if (!termsAccepted) {
            alert("You must agree to the Terms and Conditions!");
        } else {
            const url = '/api/register_user.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('password', password);

            axios.post(url, fData)
                .then(response => {
                    setName('');
                    setEmail('');
                    setPassword('');
                    if(response.data.status === "success") {
                        alert('Please check your email (including spam folder) for the account activation link.');
                        navigate("/Login");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network error occurred');
                });
        }
    }

    return (
        <div>
            <div className="hero-banner-area home-4 hero-bg-3 parallax no-attm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                            <div className="banner-content">
                                <h1>Registration <span style={{textTransform: "lowercase"}}>for</span></h1>
                                <h1>Toilet Conference</h1>
                                <h2>2025</h2>
                                <p>Dhaka, Bangladesh | 25-26 February 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Sign Up</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label>Email</label>
                                                <input className="form-control"
                                                       type="email"
                                                       placeholder="Please enter your email"
                                                       name="email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       required
                                                       autoComplete="off" />
                                            </div>
                                            <div className="col-lg-12">
                                                <label>Password</label>
                                                <input className="form-control"
                                                       type="password"
                                                       name="password"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       placeholder="Please choose a strong password"
                                                       required
                                                       autoComplete="off"
                                                       minLength="8" />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexCheckChecked"
                                                        name="terms"
                                                        checked={termsAccepted}
                                                        onChange={() => setTermsAccepted(!termsAccepted)}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        I agree to the <a href='/Terms' target='_blank'>Terms and Conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-primary" type="submit">
                                                    Register Now
                                                </button>
                                            </div>
                                            <div className="p-3">
                                                <p>You already have an account? <Link to="/Login">Log In.</Link></p>
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
