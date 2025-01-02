import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

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


    const sendEmail = async () => {
        const token = localStorage.getItem("userToken");
        try {
            const response = await axios.get("/api/send_email.php", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.data.status === "success") {
               alert('Please check your email and verify your account!');
            } else {
                setError(response.data.message || "Failed to fetch profile.");
            }
        } catch (err) {
            setError("Email verification failed!");
            console.error(err);
        }
    }

    return (
        <div>
            <div className="main-container">
                <Menu/>

                <div className="container mt-3 mb-3">
                    <div className="row">
                        {emailStatus == 0 ? (
                            <div className="col-12">
                                <div className="alert alert-warning" role="alert">
                                    Please click{" "}
                                    <Link
                                        to=""
                                        onClick={sendEmail}
                                        className="alert-link"
                                    >
                                        here
                                    </Link>{" "}
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
