import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../Components/footer";
import axios from "axios";

function Terms () {
    const [user_id, setUserId] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [studentStatus, setStudentStatus] = useState("");
    const [studentVerification, setStudentVerification] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            /*if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }*/

            try {
                const response = await axios.get("/api/fetch_profile.php", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
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

        // Call the function initially
        fetchSessionData();

        // Set up polling
        const interval = setInterval(fetchSessionData, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
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
                                            <li>Terms & Conditions</li>
                                        </ol>
                                    </div>
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
                                        <h2>Terms & Conditions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <p>By registering for the Toilet Conference 2025, you agree to the following terms and conditions:</p>
                                <p>1. Registration is confirmed only upon the completion of full payment.</p>
                                <p>2. WaterAid Bangladesh reserves the right to refuse or cancel registrations under specific circumstances</p>
                                <p>3. The Conference dates are subject to change in the event of unforeseen circumstances, including but not limited to political unrest or natural disasters in Bangladesh.</p>
                                <p>4. If the event is postponed, all registrations will remain valid for the rescheduled dates, and further updates will be informed.</p>
                                <p>5. In case of cancellation, participants will be informed promptly, and further instructions will be provided.</p>
                                <p>6. All participants are expected to behave respectfully towards fellow attendees, speakers, and organizers, maintaining professional decorum at all times.</p>
                                <p>7. Harassment, discrimination, or any behavior that disrupts the conference environment is strictly prohibited.</p>
                                <p>8. The Conference Secretariat reserves the right to remove any participant violating these terms and conditions without refund of registration fee.</p>
                                <p>9. By participating in the Conference, you consent to photography, videography, and audio recording by the conference organisers and its partners.</p>
                                <p>10. Your image, video, or audio may be used in promotional materials, reports, and digital content in accordance with Conference Secretariat’s content usage policies.</p>
                                <p>11. Any requests to access, modify, or delete your personal information can be directed to [wateraidbangladesh@wateraid.org].</p>
                                <p>12. WaterAid Bangladesh complies with GDPR/ UK Privacy Act, and Bangladesh ICT Act (2018), ensuring your personal data is stored securely and used only for Conference-related purposes.</p>
                                <p>13. All registration fees are non-refundable.</p>
                                <p>14. WaterAid Bangladesh is not liable for any personal injury, loss, or damage to property during the Conference.</p>
                                <p>15. Participants are responsible for arranging their own travel, accommodation, and personal insurance, unless otherwise determined by the Conference Secretariat.</p>
                                <p>16. All materials presented at the Conference, including but not limited to presentations, handouts, and session recordings, remain the intellectual property of the respective authors or Conference Secretariat.</p>
                                <p>17. Redistribution or unauthorized use of Conference materials without explicit permission is prohibited.</p>
                                <p>18. Conference Secretariat reserves the right to update or amend these terms and conditions at any time.</p>
                                <p>19. Any updates will be communicated to participants via email and the official conference website.</p>
                                <p>By completing your registration, you confirm that you have read, understood, and agree to these terms and conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default Terms