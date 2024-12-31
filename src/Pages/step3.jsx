import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function Step3 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("2");
    const [student, setStudent] = useState("");




    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [otherInput, setOtherInput] = useState("");
    const [birthYear, setBirthYear] = useState("");



    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Capture the selected file
    };

    const handleOtherInputChange = (e) => {
        setOtherInput(e.target.value); // Update the "Other" input field
    };
    const [cities, setCities] = useState([]);

    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);


    const [file, setFile] = useState(null);
    const [selectedTours, setSelectedTours] = useState({
        preConference: false,
        postConference: false
    });


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

    const [nationalities, setNationalities] = useState([]);
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


    const handleTicket = () => {
        const url = '/api/purchase_ticket.php';
        let fData = new FormData();
        fData.append('phone', phone);
        fData.append('city', city);
        fData.append('nationality', nationality);
        fData.append('gender', gender);
        fData.append('otherInput', otherInput);
        fData.append('birthYear', birthYear);
        fData.append('flag', flag);
        axios.post(url, fData)
            .then(response => {
                alert(response.data);
                if(response.data === "Success"){
                    navigate("/Profile");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
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
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile">Professional/Academic Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact">Visa Invitation</a>
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
                                                  onSubmit={handleTicket}>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Do you need visa invitation letter? *</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="flexRadioFemale"
                                                                checked={student === "Yes"}
                                                                onChange={() => setStudent("Yes")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="flexRadioFemale"
                                                                checked={student === "No"}
                                                                onChange={() => setStudent("No")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                No
                                                            </label>
                                                        </div>
                                                        {student === "Yes" && (
                                                            <>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Provide passport
                                                                        number</label>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={otherInput}
                                                                        onChange={handleOtherInputChange}
                                                                        required={student === "Yes"}
                                                                    />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Passport issue
                                                                        date </label>
                                                                    <br></br><small>Please input date</small>
                                                                    <input
                                                                        type="date"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={otherInput}
                                                                        onChange={handleOtherInputChange}
                                                                        required={student === "Yes"}
                                                                    />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Passport
                                                                        expiration date</label>
                                                                    <br></br><small>Please input date</small>
                                                                    <input
                                                                        type="date"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={otherInput}
                                                                        onChange={handleOtherInputChange}
                                                                        required={student === "Yes"}
                                                                    />
                                                                </div>
                                                                <div className="col-12 mt-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="fileUpload">Upload scanned copy of passport</label>
                                                                        <input
                                                                            type="file"
                                                                            id="fileUpload"
                                                                            className="form-control pt-3"
                                                                            onChange={handleFileChange}
                                                                            required={student === "Yes"}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>

                                                        )}
                                                    </div>
                                                </div>

                                                <div className="btn-2">
                                                    <button className="btn-primary" name="submit-form"
                                                            type="submit">Next
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

export default Step3