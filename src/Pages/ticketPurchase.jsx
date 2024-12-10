import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function TicketPurchase() {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [nationality, setNationality] = useState('');
    const [city, setCity] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [invitation, setInvitation] = useState('');
    const [passport, setPassport] = useState('');
    const [dietary, setDietary] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [notification, setNotification] = useState('');
    const [selectedTours, setSelectedTours] = useState({
        preConference: false,
        postConference: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedTours((prevState) => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleTicket = () => {
        if (nationality.length === 0) {
            alert("Nationality has left Blank!");
        } else if (city.length === 0) {
            alert("City has left Blank!");
        } else if (invitation.length === 0) {
            alert("Visa Invitation has left Blank!");
        } else if (dietary.length === 0) {
            alert("Dietary has left Blank!");
        }  else if (accessibility.length === 0) {
            alert("Accessibility has left Blank!");
        } else if (notification.length === 0) {
            alert("Notification has left Blank!");
        } else {
            const url = 'https://regtoiletconference.org/api/purchase_ticket.php';
            let fData = new FormData();
            fData.append('nationality', nationality);
            fData.append('city', city);
            fData.append('organization', organization);
            fData.append('designation', designation);
            fData.append('invitation', invitation);
            fData.append('passport', passport);
            fData.append('dietary', dietary);
            fData.append('accessibility', accessibility);
            fData.append('notification', notification);
            // Create a string for selectedTours (comma-separated)
            const selectedToursString = `${selectedTours.preConference},${selectedTours.postConference}`;
            fData.append('selectedTours', selectedToursString);

            axios.post(url, fData)
                .then(response => {
                    alert(response.data);
                    if(response.data === "Your Data Has Been Inserted Successfully"){
                        navigate("/Profile");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network error occurred');
                });
        }

    }

    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            /*if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }*/

            try {
                const response = await axios.get("https://conference.frogbid.com/api/fetch_profile.php", {
                    headers: {
                        "Authorization": `Bearer ${token}` // Send token as a Bearer token
                    }
                });

                if (response.data.status === "success") {
                    setUserName(response.data.userName);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        fetchSessionData();
        // Set up polling
        const interval = setInterval(fetchSessionData, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
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
                                        <li>Purchase Ticket</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-2 contact-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div className="title-text pl">
                                    <h2>Purchase Ticket</h2>
                                    <p>* Signed Input fields must be filled up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="nationality"
                                                                   className="form-control" placeholder="Nationality *"
                                                                   required value={nationality}
                                                                   onChange={(e) => setNationality(e.target.value)}
                                                                   data-error="Enter your name" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="city"
                                                                   className="form-control"
                                                                   placeholder="City of current residence * (e.g., Dhaka, Bangladesh)"
                                                                   required value={city}
                                                                   onChange={(e) => setCity(e.target.value)}
                                                                   data-error="Enter your name" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="organization"
                                                                   className="form-control"
                                                                   placeholder="Name of organisation/ institution (e.g., WaterAid)"
                                                                   required value={organization}
                                                                   onChange={(e) => setOrganization(e.target.value)}
                                                                   autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="designation"
                                                                   className="form-control"
                                                                   placeholder="Designation (e.g., Student)"
                                                                   required value={designation}
                                                                   onChange={(e) => setDesignation(e.target.value)}
                                                                   data-error="Enter your name" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Do you need visa invitation letter? *</label>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="invitation"
                                                                    id="flexRadioDefault1"
                                                                    checked={invitation === "Yes"}
                                                                    onChange={() => setInvitation("Yes")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="invitation"
                                                                    id="flexRadioDefault2"
                                                                    checked={invitation === "No"}
                                                                    onChange={() => setInvitation("No")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault2">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="passport"
                                                                   className="form-control"
                                                                   placeholder="Provide passport number."
                                                                   value={passport}
                                                                   onChange={(e) => setPassport(e.target.value)}
                                                                   autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <lable>Dietary Preferences *</lable>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="dietary" id="flexRadioDefault1"
                                                                       checked={dietary === "Vegetarian"}
                                                                       onChange={() => setDietary("Vegetarian")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Vegetarian
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="dietary" id="flexRadioDefault1"
                                                                       checked={dietary === "Non-Vegetarian"}
                                                                       onChange={() => setDietary("Non-Vegetarian")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Non-Vegetarian
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="dietary" id="flexRadioDefault1"
                                                                       checked={dietary === "Vegan"}
                                                                       onChange={() => setDietary("Vegan")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Vegan
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="dietary" id="flexRadioDefault1"
                                                                       checked={dietary === "Not applicable"}
                                                                       onChange={() => setDietary("Not applicable")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Not applicable
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="dietary" id="flexRadioDefault1"
                                                                       checked={dietary === "Other"}
                                                                       onChange={() => setDietary("Other")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Other
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <lable>Accessibility Needs *</lable>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="accessibility" id="flexRadioDefault1"
                                                                       checked={accessibility === "Wheelchair access"}
                                                                       onChange={() => setAccessibility("Wheelchair access")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Wheelchair access
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="accessibility" id="flexRadioDefault1"
                                                                       checked={accessibility === "Visual aids"}
                                                                       onChange={() => setAccessibility("Visual aids")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Visual aids
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="accessibility" id="flexRadioDefault1"
                                                                       checked={accessibility === "Sign language interpretation"}
                                                                       onChange={() => setAccessibility("Sign language interpretation")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Sign language interpretation
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="accessibility" id="flexRadioDefault1"
                                                                       checked={accessibility === "Not applicable"}
                                                                       onChange={() => setAccessibility("Not applicable")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Not applicable
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="accessibility" id="flexRadioDefault1"
                                                                       checked={accessibility === "Other"}
                                                                       onChange={() => setAccessibility("Other")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Other
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <label>Technical Tour</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="preConference"
                                                                checked={selectedTours.preConference}
                                                                onChange={handleCheckboxChange}
                                                                id="flexCheckPreConference"
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckPreConference">
                                                                Pre-conference technical tour - Dasherkandi
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="postConference"
                                                                checked={selectedTours.postConference}
                                                                onChange={handleCheckboxChange}
                                                                id="flexCheckPostConference"
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexCheckPostConference">
                                                                Post-conference technical tour - Munda Community
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <lable>Do you consent to receive updates and notifications
                                                                about the conference via email? *
                                                            </lable>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="notification" id="flexRadioDefault1"
                                                                       checked={notification === "Yes"}
                                                                       onChange={() => setNotification("Yes")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="notification" id="flexRadioDefault2"
                                                                       checked={notification === "No"}
                                                                       onChange={() => setNotification("No")}/>
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault2">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btn-2">
                                                    <button className="btn-primary" name="submit-form"
                                                            type="submit" onClick={handleTicket}>Purchase Ticket
                                                    </button>
                                                </div>
                                            </form>
                                            <div id="msgalert" className="hidden"></div>
                                        </div>
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

export default TicketPurchase