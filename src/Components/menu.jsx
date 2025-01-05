import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
function Menu (){
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [validity, setValidity] = useState(0);

    useEffect(() => {
        const verifyRegistration = async () => {
            const token = localStorage.getItem("userToken");

            if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }

            try {
                const response = await axios.get("/api/fetch_registration_status.php", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                if (response.data.status === "success") {
                    setValidity(1);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        // Call the function initially
        verifyRegistration();
    }, [navigate]);
        return (
            <div>
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
                                                <Link className="nav-link" to="/Ticket">Ticket Purchase</Link>
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
            </div>
        )
}

export default Menu