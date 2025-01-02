import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function TicketPurchase() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [otherInput, setOtherInput] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [flag, setFlag] = useState("1");

    const handleGenderChange = (value) => {
        setGender(value); // Set gender to the selected value
        if (value !== "Other") {
            setOtherInput(""); // Clear the input field when not selecting "Other"
        }
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


    const handleTicket = (event) => {
        event.preventDefault();
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
                console.log(response.data);
                if(response.data === "Success"){
                    navigate("/Second-Step");
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

            if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }

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
            <Menu/>
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
                                                  onSubmit={handleTicket}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Contact Number *</lable>
                                                            <br></br><small className="mb-3">Write your primary contact
                                                            number with country code (e.g., +88 01 2000 0000)</small>
                                                            <input
                                                                id="inputName"
                                                                type="text"
                                                                name="phone"
                                                                className="form-control"
                                                                placeholder="+88 01 2000 0000"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                                autoComplete="off"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Nationality *</lable>
                                                            <br></br><small className="mb-3">Write your primary
                                                            nationality according to your passport/ identification
                                                            document (e.g., Bangladeshi)</small>
                                                            <select
                                                                id="nationalitySelect"
                                                                name="nationality"
                                                                className="form-control"
                                                                required
                                                                value={nationality}
                                                                onChange={(e) => setNationality(e.target.value)}
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
                                                            <label>Gender *</label>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioFemale"
                                                                    checked={gender === "Female"}
                                                                    onChange={() => handleGenderChange("Female")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioFemale">
                                                                    Female
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioMale"
                                                                    checked={gender === "Male"}
                                                                    onChange={() => handleGenderChange("Male")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioMale">
                                                                    Male
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioThirdGender"
                                                                    checked={gender === "Third Gender"}
                                                                    onChange={() => handleGenderChange("Third Gender")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioThirdGender">
                                                                    Third Gender
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioNonBinary"
                                                                    checked={gender === "Non-binary"}
                                                                    onChange={() => handleGenderChange("Non-binary")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioNonBinary">
                                                                    Non-binary
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioPreferNotToSay"
                                                                    checked={gender === "Prefer not to say"}
                                                                    onChange={() => handleGenderChange("Prefer not to say")}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexRadioPreferNotToSay"
                                                                >
                                                                    Prefer not to say
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="gender"
                                                                    id="flexRadioOther"
                                                                    checked={gender === "Other" || (gender && otherInput)}
                                                                    onChange={() => handleGenderChange("Other")}
                                                                />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioOther">
                                                                    Other
                                                                </label>
                                                            </div>

                                                            {/* Render input field if "Other" is selected */}
                                                            {gender === "Other" && (
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Please
                                                                        specify:</label>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={otherInput}
                                                                        onChange={handleOtherInputChange}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Birth year *</label>
                                                            <select
                                                                id="birthYearDropdown"
                                                                name="birthYear"
                                                                className="form-control"
                                                                value={birthYear}
                                                                onChange={(e) => setBirthYear(e.target.value)}
                                                                required
                                                            >
                                                                <option value="">Select Birth Year</option>
                                                                {Array.from({length: 125}, (_, i) => {
                                                                    const year = new Date().getFullYear() - i;
                                                                    return <option key={year}
                                                                                   value={year}>{year}</option>;
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Country of current residence *</lable>
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

export default TicketPurchase