import React, {useState} from "react";
import Header from "../Components/header";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    function EmailSubmission (event) {
        event.preventDefault();
        const url = '/api/email_password.php';
        let fData = new FormData();
        fData.append('email', email);
        axios.post(url, fData)
            .then(response => {
                if(response.data.status === "Success"){
                    alert('Please check your email to set new password');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }
    return (
        <div>
            <Header/>
            <div className="hero-banner-area home-4 hero-bg-3 parallax no-attm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                            <div className="banner-content">
                                <h1 style={{fontSize: '92px'}}>Registration {/*<span style={{textTransform:"lowercase"}}>for</span>*/}</h1>
                                <p style={{marginBottom: '0', marginTop: '20px'}}>Toilet Conference 2025</p>
                                <p style={{marginBottom: '0', marginTop: '20px'}}>Dhaka, Bangladesh | 25-26 February
                                    2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Forget password</h3>
                                    <form
                                        action="#"
                                        onSubmit={EmailSubmission}
                                    >
                                    <div className="row">
                                            <div className="col-lg-12">
                                                <label>Email</label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    placeholder="Please enter your registered email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    Send email
                                                </button>
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
    )
}

export default ForgetPassword