import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function Step5 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("5");
    const [tour, setTour] = useState("");

    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);
    const [language, setLanguage] = useState([]);

    const [activeStep, setActiveStep] = useState(4);

    const steps = ['General information', 'Professional/Academic Information', 'Visa Invitation','Requirements', 'Technical Tour', 'Notifications'];

    const [selectedTours, setSelectedTours] = useState({
        sakhipur: false,
        dasherkandi: false,
        faridpur: false,
        coxs: false,
        saidpur: false

    });
    const [isPreConferenceSelected, setIsPreConferenceSelected] = useState(false);
    const [isPostConferenceSelected, setIsPostConferenceSelected] = useState(false);

    const handlePreConferenceToggle = () => {
        setIsPreConferenceSelected((prev) => !prev);
    };

    const handlePostConferenceToggle = () => {
        setIsPostConferenceSelected((prev) => !prev);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedTours((prevState) => ({
            ...prevState,
            [name]: checked
        }));
    };


    const handleTicket = (event) => {
        event.preventDefault();
        const url = '/api/purchase_ticket.php';
        let fData = new FormData();
        fData.append('flag', flag);
        const selectedToursString = `${selectedTours.sakhipur},${selectedTours.dasherkandi},${selectedTours.faridpur},${selectedTours.coxs},${selectedTours.saidpur}`;
        fData.append('selectedTours', selectedToursString);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if(response.data === "Success"){
                    navigate("/Sixth-Step");
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
                                                        <label>Do you want to take any technical tour? *</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="tour"
                                                                id="flexRadioFemale"
                                                                checked={tour === "Yes"}
                                                                onChange={() => setTour("Yes")}
                                                                required
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
                                                                name="tour"
                                                                id="flexRadioFemale"
                                                                checked={tour === "No"}
                                                                onChange={() => setTour("No")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                No
                                                            </label>
                                                        </div>
                                                        {tour === "Yes" && (
                                                            <>
                                                                {/* Pre-Conference Tour Checkbox */}
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="preConferenceToggle"
                                                                        checked={isPreConferenceSelected}
                                                                        onChange={handlePreConferenceToggle}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="preConferenceToggle"
                                                                           style={{fontWeight: "bold"}}>
                                                                        Pre-Conference Tour - 24 February 2025.
                                                                    </label>
                                                                </div>


                                                                {/* Pre-Conference Tour (Tour 1) */}
                                                                {isPreConferenceSelected && (
                                                                    <div className="form-check mt-3">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            name="sakhipur"
                                                                            checked={selectedTours.sakhipur}
                                                                            onChange={(e) => setSelectedTours({
                                                                                ...selectedTours,
                                                                                sakhipur: e.target.checked
                                                                            })}
                                                                            id="sakhipurTour"
                                                                        />
                                                                        <label className="form-check-label"
                                                                               htmlFor="sakhipurTour"
                                                                               style={{fontWeight: "bold"}}>
                                                                            Tour 1- FSTP visit, Sakhipur, Bangladesh
                                                                        </label>
                                                                        <br/>
                                                                        <b>
                                                                            24 February 2025, Monday<br/>
                                                                            <span style={{color:'#296173'}}>8,500 BDT/ 70 USD</span><br/>
                                                                            Seats filled: 0/35
                                                                        </b>
                                                                        <br/>
                                                                        Sakhipur FSTP, located in the Tangail district
                                                                        under Sakhipur Municipality...
                                                                        <br/>
                                                                        <a style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "bold"
                                                                        }} href="#" target="_blank">
                                                                            Learn More
                                                                        </a>
                                                                    </div>
                                                                )}
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="postConferenceToggle"
                                                                        checked={isPostConferenceSelected}
                                                                        onChange={handlePostConferenceToggle}
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="postConferenceToggle"
                                                                           style={{fontWeight: "bold"}}>
                                                                        Post-Conference Tour - 27 February- 01 March 2025.
                                                                    </label>
                                                                </div>

                                                                {/* Post-Conference Tours (Tours 2–5) */}
                                                                {isPostConferenceSelected && (
                                                                    <>
                                                                        <div className="form-check mt-3">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="dasherkandi"
                                                                                checked={selectedTours.dasherkandi}
                                                                                onChange={(e) => setSelectedTours({
                                                                                    ...selectedTours,
                                                                                    dasherkandi: e.target.checked
                                                                                })}
                                                                                id="dasherkandiTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="dasherkandiTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 2 - Sewage Treatment Plant visit,
                                                                                Dasherkandi, Dhaka, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                27 February 2025, Thursday<br/>
                                                                                <span style={{color:'#296173'}}>7,000
                                                                                BDT/55 USD</span><br/>
                                                                                Seats filled: 0/35
                                                                            </b>
                                                                            <br/>
                                                                            The Dasherkandi Sewage Treatment Plant has
                                                                            set several records...
                                                                            <br/>
                                                                            <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a>
                                                                        </div>

                                                                        <div className="form-check mt-3">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="faridpur"
                                                                                checked={selectedTours.faridpur}
                                                                                onChange={(e) => setSelectedTours({
                                                                                    ...selectedTours,
                                                                                    faridpur: e.target.checked
                                                                                })}
                                                                                id="faridpurTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="faridpurTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 3- Sanitation Workers' Forum visit,
                                                                                Faridpur, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                27 February 2025, Thursday<br/>
                                                                                <span style={{color:'#296173'}}>9,000 BDT/75 USD</span><br/>
                                                                                Seats filled: 0/60
                                                                            </b>
                                                                            <br/>
                                                                            Visit Faridpur and learn about the
                                                                            challenges, opportunities, needs, and
                                                                            desires...
                                                                            <br/>
                                                                            <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a>
                                                                        </div>

                                                                        <div className="form-check mt-3">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="coxs"
                                                                                checked={selectedTours.coxs}
                                                                                onChange={handleCheckboxChange}
                                                                                id="coxsTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="coxsTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 4 – Omni Processor visit, Cox’s
                                                                                Bazar, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                28 February 2025 – 1 March 2025, Friday
                                                                                and Saturday<br/>
                                                                                <span style={{color:'#296173'}}>32,000
                                                                                BDT/260 USD</span><br/>
                                                                                Seats Filled: 0/35
                                                                            </b>
                                                                            <br/>
                                                                            Omni Processor in Cox’s Bazar, a government
                                                                            initiative to introduce groundbreaking
                                                                            technology...
                                                                            <br/>
                                                                            <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a>
                                                                        </div>

                                                                        <div className="form-check mt-3">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="saidpur"
                                                                                checked={selectedTours.saidpur}
                                                                                onChange={handleCheckboxChange}
                                                                                id="saidpurTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="saidpurTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 5 –FSTP visit, Saidpur, Nilphamari,
                                                                                Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                28 February 2025 – 1 March 2025, Friday
                                                                                and Saturday<br/>
                                                                                <span style={{color:'#296173'}}>25,500 BDT/210
                                                                                USD</span><br/>
                                                                                Seats Filled: 0/25
                                                                            </b>
                                                                            <br/>
                                                                            Explore the Faecal Sludge Treatment Plant in
                                                                            Saidpur, a vital facility that ensures safe
                                                                            and
                                                                            effective treatment of faecal sludge...
                                                                            <br/>
                                                                            <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </>
                                                        )}


                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <Link
                                                                to='/Fourth-Step'>
                                                                <button className="btn-primary" name="submit-form"
                                                                        type="button">Back</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <button className="btn-primary" name="submit-form"
                                                                    type="submit">Save and Continue
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

export default Step5