import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function Step4 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("4");
    const [dietary, setDietary] = useState("");
    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);
    const [otherDietary, setOtherDietary] = useState([]);
    const [accessibility, setAccessibility] = useState([]);
    const [otherAccessibility, setOtherAccessibility] = useState([]);
    const [language, setLanguage] = useState([]);

    const [activeStep, setActiveStep] = useState(3);

    const steps = ['General information', 'Professional/Academic Information', 'Visa Invitation','Requirements', 'Technical Tour', 'Notifications'];

    const handleOtherDietary = (e) => {
        setOtherDietary(e.target.value);
    };
    const handleOtherAccessibility = (e) => {
        setOtherAccessibility(e.target.value);
    };


    const handleTicket = (event) => {
        event.preventDefault();
        const url = '/api/purchase_ticket.php';
        let fData = new FormData();
        fData.append('flag', flag);
        fData.append('dietary', dietary);
        fData.append('otherDietary', otherDietary);
        fData.append('accessibility', accessibility);
        fData.append('otherAccessibility', otherAccessibility);
        fData.append('language', language);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if(response.data === "Success"){
                    navigate("/Fifth-Step");
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
                const response = await axios.get("/api/fetch_ticket_data.php", {
                    headers: {
                        "Authorization": `Bearer ${token}` // Send token as a Bearer token
                    }
                });

                if (response.data.status === "success") {
                    setDietary(response.data.dietary);
                    setAccessibility(response.data.accessibility);
                    setLanguage(response.data.language);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        fetchSessionData();
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
                                    <p>* signed input fields must be filled up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row event-schedule-area-two">
                        <div className="col-12">
                            <ul className="step-list">
                                {steps.map((step, index) => (
                                    <li
                                        key={index}
                                        className={`step-item ${
                                            index < activeStep ? 'completed' : ''
                                        } ${index === activeStep ? 'active' : ''}`}
                                    >
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form"
                                                  onSubmit={handleTicket}>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Dietary Preference *</label><br></br>
                                                        <small style = {{display: "block", marginTop: "0px", marginBottom: "5px" }}>
                                                            <i>Halal foods will be served during the conference.</i></small>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dietary"
                                                                id="flexRadioFemale"
                                                                checked={dietary === "Not applicable"}
                                                                onChange={() => setDietary("Not applicable")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                No preference
                                                            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dietary"
                                                                id="flexRadioFemale"
                                                                checked={dietary === "Non-vegetarian"}
                                                                onChange={() => setDietary("Non-vegetarian")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Non-vegetarian
                                                            </label>
                                                        </div>

                                                        
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dietary"
                                                                id="flexRadioFemale"
                                                                checked={dietary === "Vegetarian"}
                                                                onChange={() => setDietary("Vegetarian")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Vegetarian
                                                            </label>
                                                        </div>
                                                       
                                                 
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="dietary"
                                                                id="flexRadioFemale"
                                                                checked={dietary === "Other"}
                                                                onChange={() => setDietary("Other")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Other
                                                            </label>
                                                        </div>
                                                        {dietary === "Other" && (
                                                            <div className="mt-3">
                                                                <label htmlFor="otherGenderInput">Please specify</label>
                                                                <input
                                                                    type="text"
                                                                    id="otherGenderInput"
                                                                    className="form-control"
                                                                    value={otherDietary}
                                                                    onChange={handleOtherDietary}
                                                                    required={dietary === "Other"}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Accessibility need *</label>
                                                        {/* <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="accessibility"
                                                                id="flexRadioFemale"
                                                                checked={accessibility === "Sign language interpretation"}
                                                                onChange={() => setAccessibility("Sign language interpretation")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Sign language interpretation
                                                            </label>
                                                        </div> */}
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="accessibility"
                                                                id="flexRadioFemale"
                                                                checked={accessibility === "Nothing"}
                                                                onChange={() => setAccessibility("Nothing")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Nothing
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="accessibility"
                                                                id="flexRadioFemale"
                                                                checked={accessibility === "Wheelchair access"}
                                                                onChange={() => setAccessibility("Wheelchair access")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Wheelchair access
                                                            </label>
                                                        </div>
                                                        {/* <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="accessibility"
                                                                id="flexRadioFemale"
                                                                checked={accessibility === "Visually impaired"}
                                                                onChange={() => setAccessibility("Visually impaired")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Visually impaired
                                                            </label>
                                                        </div> */}
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="accessibility"
                                                                id="flexRadioFemale"
                                                                checked={accessibility === "Other"}
                                                                onChange={() => setAccessibility("Other")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Other
                                                            </label>
                                                        </div>
                                                        {accessibility === "Other" && (
                                                            <div className="mt-3">
                                                                <label htmlFor="otherGenderInput">Please specify</label>
                                                                <input
                                                                    type="text"
                                                                    id="otherGenderInput"
                                                                    className="form-control"
                                                                    value={otherAccessibility}
                                                                    onChange={handleOtherAccessibility}
                                                                    required={accessibility === "Other"}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Language preference for conference *</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="language"
                                                                id="flexRadioFemale"
                                                                checked={language === "English"}
                                                                onChange={() => setLanguage("English")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                English
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="language"
                                                                id="flexRadioFemale"
                                                                checked={language === "Bangla"}
                                                                onChange={() => setLanguage("Bangla")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Bangla
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <Link
                                                                to='/Third-Step'>
                                                                <button className="btn-primary" name="submit-form"
                                                                        type="button">Back</button>
                                                            </Link>
                                                    </div>
                                                </div>
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <button className="btn-primary" name="submit-form"
                                                                    type="submit">Save and continue
                                                            </button>
                                                        </div>
                                                    </div>
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

export default Step4