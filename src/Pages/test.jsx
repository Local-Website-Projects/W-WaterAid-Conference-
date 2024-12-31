import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function TicketPurchase() {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [invitation, setInvitation] = useState('');
    const [passport, setPassport] = useState('');
    const [dietary, setDietary] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [notification, setNotification] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [file, setFile] = useState(null);
    const [selectedTours, setSelectedTours] = useState({
        preConference: false,
        postConference: false
    });
    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Capture the selected file
    };

    const [cities, setCities] = useState([]);
    const [nationalities, setNationalities] = useState([]);


    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('/api/fetch_country.php'); // Path to your PHP script
                const data = await response.json();
                setCities(data);  // Set the countries in state
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);


    useEffect(() => {
        const fetchNationalities = async () => {
            try {
                const response = await fetch('/api/fetch_nationality.php');
                const data = await response.json();
                setNationalities(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchNationalities();
    }, []);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedTours((prevState) => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleTicket = () => {
        if (city.length === 0) {
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
            const url = '/api/purchase_ticket.php';
            let fData = new FormData();
            fData.append('city', city);
            fData.append('organization', organization);
            fData.append('designation', designation);
            fData.append('invitation', invitation);
            fData.append('passport', passport);
            fData.append('dietary', dietary);
            fData.append('accessibility', accessibility);
            fData.append('notification', notification);
            fData.append('issueDate', issueDate);
            fData.append('expireDate', expireDate);
            if (file) {
                fData.append('file', file);
            }
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
                const response = await axios.get("/api/fetch_profile.php", {
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
            <div className="ct-2 contact-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div className="title-text pl">
                                    <h2>Registration</h2>
                                    <p>* Signed Input fields must be filled up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row event-schedule-area-two">
                        <div className="col-4">
                            <ul className="nav custom-tab" id="myTab" role="tablist" style={{display:"inline"}}>
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-taThursday" href="#home">General information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile">Professional/Academic Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact">Visa Invitation</a>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <a className="nav-link" id="sunday-tab" data-toggle="tab" href="#sunday">Requirements</a>
                                </li>
                                <li className="nav-item mr-0 d-none d-lg-block">
                                    <a className="nav-link" id="monday-tab" data-toggle="tab" href="#monday">Technical Tour</a>
                                </li>
                                <li className="nav-item mr-0 d-none d-lg-block">
                                    <a className="nav-link" id="monday-tab-2" data-toggle="tab" href="#monday">Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form"
                                                  encType="multipart/form-data">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Nationality</lable>
                                                            <br></br><small className="mb-3">Write your primary
                                                            nationality according to your passport/ identification
                                                            document (e.g., Bangladeshi)</small>
                                                            <select
                                                                id="nationalitySelect"
                                                                name="nationality"
                                                                className="form-control"
                                                                required
                                                                value={nationalities}
                                                                onChange={(e) => setNationalities(e.target.value)}
                                                                data-error="Select your city"
                                                            >
                                                                <option value="" disabled>
                                                                    Nationality
                                                                </option>
                                                                {nationalities.map((nationalityOption, index) => (
                                                                    <option key={index} value={nationalityOption}>
                                                                        {nationalityOption}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Contact number *</label>

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
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Country of current residence</lable>
                                                            <br></br><small className="mb-3">(e.g. Bangladesh)</small>
                                                            <select
                                                                id="citySelect"
                                                                name="city"
                                                                className="form-control"
                                                                required
                                                                value={city}
                                                                onChange={(e) => setCity(e.target.value)}
                                                                data-error="Select your nationality"
                                                            >
                                                                <option value="" disabled>
                                                                    Country of current residence
                                                                </option>
                                                                {cities.map((cityOption, index) => (
                                                                    <option key={index} value={cityOption}>
                                                                        {cityOption}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>









                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="organization"
                                                                   className="form-control"
                                                                   placeholder="Name of organisation/ institution (e.g., WaterAid)"
                                                                   required value={organization}
                                                                   onChange={(e) => setOrganization(e.target.value)}
                                                                   autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input id="inputName" type="text" name="designation"
                                                                   className="form-control"
                                                                   placeholder="Designation (e.g., Student)"
                                                                   required value={designation}
                                                                   onChange={(e) => setDesignation(e.target.value)}
                                                                   data-error="Enter your name" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
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

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <input
                                                                id="inputName"
                                                                type="text"
                                                                name="passport"
                                                                className="form-control"
                                                                placeholder="Provide passport number."
                                                                value={passport}
                                                                onChange={(e) => setPassport(e.target.value)}
                                                                autoComplete="off"
                                                                disabled={invitation !== "Yes"} // Disable if "No" is selected
                                                                required={invitation === "Yes"}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="fileUpload">Upload Passport Scanned
                                                                File</label>
                                                            <input
                                                                type="file"
                                                                id="fileUpload"
                                                                className="form-control pt-3"
                                                                onChange={handleFileChange}
                                                                disabled={invitation !== "Yes"} // Disable if "No" is selected
                                                                required={invitation === "Yes"}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Passport issue date</label>
                                                            <input
                                                                id="inputName"
                                                                type="date"
                                                                name="passport"
                                                                className="form-control"
                                                                placeholder="Provide passport issue date."
                                                                value={issueDate}
                                                                onChange={(e) => setIssueDate(e.target.value)}
                                                                autoComplete="off"
                                                                disabled={invitation !== "Yes"} // Disable if "No" is selected
                                                                required={invitation === "Yes"}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Passport expiration date</label>
                                                            <input
                                                                id="inputName"
                                                                type="date"
                                                                name="passport"
                                                                className="form-control"
                                                                placeholder="Provide passport expiration date."
                                                                value={expireDate}
                                                                onChange={(e) => setExpireDate(e.target.value)}
                                                                autoComplete="off"
                                                                disabled={invitation !== "Yes"} // Disable if "No" is selected
                                                                required={invitation === "Yes"}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Accessibility Needs *</label>
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
                                                    <div className="col-12">
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
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Dietary Preferences *</label>
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


                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Do you consent to receive updates and notifications
                                                                about the conference via email? *</label>
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
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                   required={true}
                                                                   name="terms" id="flexRadioDefault2"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioDefault2">
                                                                I have agreed to the <a href="/Terms" target="_blank"
                                                                                        rel="noopener noreferrer">
                                                                Terms & Conditions
                                                            </a>
                                                            </label>
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