import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

function Banner() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Custom Alert"
                ariaHideApp={false} // Add this line to suppress warning for accessibility
                style={{
                    content: {
                        maxWidth: "70%",
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "10px",
                    },
                }}
            >
                <div className="pricing-tables-area bg-color pad100">
                    <div className="container">
                        <div className="row">
                            <button className="btn-primary mb-5" type="button" onClick={handleCloseModal}>Close
                            </button>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h4 className='mb-5'>Terms & conditions</h4>
                                <p>By registering for the Toilet Conference 2025, you agree to the following terms and
                                    conditions:</p>
                                <p>1. <b>Registration confirmation: </b> Registration is confirmed only after the full
                                    payment is received. The Conference Secretariat reserves the right to refuse or
                                    cancel registrations under specific circumstances.</p>
                                <p>2. <b>Code of conduct: </b> All participants must behave respectfully toward fellow
                                    attendees, speakers, and organisers, maintaining professional decorum at all times.
                                    Harassment, discrimination, or disruptive behaviour is strictly prohibited. The
                                    Conference Secretariat reserves the right to remove participants violating these
                                    terms, and all registration fees are non-refundable.
                                </p>
                                <p>3. <b>Intellectual property: </b> All materials presented at the Conference including
                                    presentations, handouts, and session recordings are the intellectual property of
                                    their respective authors and the Conference Secretariat. Redistribution or
                                    unauthorised use of these materials without explicit permission is prohibited.</p>
                                <p>4. <b>Photography and recording consent: </b> By participating in the Conference, you
                                    consent to photography, videography, and audio recording by the Conference
                                    Secretariat and its partners. Your image, video, or audio may be used in promotional
                                    materials, reports, and digital content, in line with the Conference Secretariat’s
                                    content usage policies.
                                </p>
                                <p>5. <b>Data protection and privacy: </b> The Conference Secretariat (WaterAid
                                    Bangladesh) adheres to GDPR, the UK Privacy Act, and the Bangladesh ICT Act. Your
                                    personal data will be securely stored and used solely for conference-related
                                    purposes. Requests to access, modify, or delete personal information can be directed
                                    to <a
                                        href="mailto:wateraidbangladesh@wateraid.org">wateraidbangladesh@wateraid.org</a>.
                                </p>
                                <p>6. <b>Travel and accommodation: </b> Participants are responsible for arranging their
                                    own travel, accommodation, and personal insurance unless explicitly stated otherwise
                                    by the Conference Secretariat.
                                </p>
                                <p>7. <b>Event changes and cancellation: </b> The Conference dates are subject to change
                                    due to unforeseen circumstances such as political unrest or natural disasters in
                                    Bangladesh. In the event of postponement, all registrations will remain valid for
                                    the new dates, and participants will be notified accordingly. If the event is
                                    cancelled, participants will be informed promptly, and further instructions will be
                                    provided.</p>
                                <p>8. <b>Liability disclaimer: </b> The Conference Secretariat is not responsible for any
                                    personal injury, loss, or damage to property during the event.</p>
                                <p>9. <b>Amendments to terms: </b> The Conference Secretariat reserves the right to update
                                    or amend these terms and conditions at any time. Updates will be communicated to
                                    participants via email and the official conference website.</p>
                                <p>By completing your registration for the Toilet Conference 2025, you confirm that you
                                    have read, understood, and agree to these terms and conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
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
                                    <h3>Sign up</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <label>Email</label>
                                                <input className="form-control"
                                                       type="email"
                                                       placeholder="Please enter your email"
                                                       name="email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                                       required
                                                       autoComplete="off"/>
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
                                                       minLength="8"/>
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
                                                        I agree to the <Link onClick={handleShowModal}>Terms and
                                                        conditions</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-primary" type="submit">
                                                    Register now
                                                </button>
                                            </div>
                                            <div className="p-3">
                                                <p>You already have an account? <Link to="/Login">Log in.</Link></p>
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
