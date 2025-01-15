import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function Step5 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("5");
    const [tour, setTour] = useState("");
    const [tour1, setTour1] = useState(0);
    const [tour2, setTour2] = useState(0);
    const [tour3, setTour3] = useState(0);
    const [tour4, setTour4] = useState(0);
    const [tour5, setTour5] = useState(0);

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

        setSelectedTours((prevState) => {
            // Group 1: dasherkandi and faridpur
            if (name === "dasherkandi" || name === "faridpur") {
                return {
                    ...prevState,
                    dasherkandi: name === "dasherkandi" ? checked : false,
                    faridpur: name === "faridpur" ? checked : false,
                };
            }

            // Group 2: coxs and saidpur
            if (name === "coxs" || name === "saidpur") {
                return {
                    ...prevState,
                    coxs: name === "coxs" ? checked : false,
                    saidpur: name === "saidpur" ? checked : false,
                };
            }

            return prevState;
        });
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
                const response = await axios.get("/api/fetch_tour_data.php", {
                    headers: {
                        "Authorization": `Bearer ${token}` // Send token as a Bearer token
                    }
                });

                if (response.data.status === "success") {
                    setTour1(response.data.tour1);
                    setTour2(response.data.tour2);
                    setTour3(response.data.tour3);
                    setTour4(response.data.tour4);
                    setTour5(response.data.tour5);
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
                                                                        Pre- Conference Tour | 24 February 2025.
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
                                                                            Tour 1 | Faecal Sludge Treatment Plant at Sakhipur, Tangail, Bangladesh
                                                                        </label>
                                                                        <br/>
                                                                        <b>
                                                                            Date: 24 February 2025 (Monday)<br/>
                                                                            <span style={{color:'#296173'}}>Price: BDT 9,500 ≈ USD 80</span><br/>
                                                                            Seats left: {30 - tour1}
                                                                        </b>
                                                                        <br/>
                                                                        Explore the Sakhipur Faecal Sludge Treatment Plant (FSTP) in Tangail, a pioneering model of integrated faecal sludge and solid waste management. Previously, Sakhipur faced significant environmental and health risks in absence of faecal sludge management. The municipality now operates an efficient FSTP recognised in the Government's 8th Five-Year Plan for its scalability. Visitors will witness innovative, community-driven waste management practices that address urban sanitation challenges, demonstrating a replicable solution for safe sanitation in Bangladesh.
                                                                        <br/>
                                                                        {/* <a style={{
                                                                            fontSize: "18px",
                                                                            fontWeight: "bold"
                                                                        }} href="#" target="_blank">
                                                                            Learn More
                                                                        </a> */}
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
                                                                        Post- Conference Tour | 27 February, 28 February - 01 March 2025.
                                                                    </label>
                                                                </div>

                                                                {/* Post-Conference Tours (Tours 2–5) */}
                                                                {isPostConferenceSelected && (
                                                                    <>
                                                                        <div className="form-check mt-3">
                                                                            <lable className="form-check-label" style={{fontWeight: "bold"}}>Important: Tours 2 & 3 and Tours 4 & 5 are scheduled on the same date- so you can select only one from each pair.<br></br> </lable>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="dasherkandi"
                                                                                checked={selectedTours.dasherkandi}
                                                                                onChange={handleCheckboxChange}
                                                                                id="dasherkandiTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="dasherkandiTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 2 | Public Toilet and Low Income Community Visit at Dhaka, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                Date: 27 February 2025 (Thursday) <br/>
                                                                                <span style={{color:'#296173'}}>
                                                                                Price:
                                                                                <strike>BDT 6,000 ≈ USD 50</strike> (Sponsored by the conference secretariat)</span><br/>
                                                                                Seats left: {50-tour2}
                                                                            </b>
                                                                            <br/>
                                                                            This tour offers an opportunity to explore WASH interventions in Dhaka, at public domain and low-income communities. The tour begins with a visit to a public toilet facility showcasing inclusive, gender-sensitive design and sustainable operation models. Afterwards, the visitors will visit Korail slum, one of Dhaka’s largest informal settlements, to witness community-managed WASH initiatives. This visit will highlight the initiatives addressing critical sanitation challenges and demonstration of scalable solutions.
                                                                            <br/>
                                                                            {/* <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a> */}
                                                                        </div>

                                                                        <div className="form-check mt-3">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                name="faridpur"
                                                                                checked={selectedTours.faridpur}
                                                                                onChange={handleCheckboxChange}
                                                                                id="faridpurTour"
                                                                            />
                                                                            <label className="form-check-label"
                                                                                   htmlFor="faridpurTour"
                                                                                   style={{fontWeight: "bold"}}>
                                                                                Tour 3 | A day with sanitation workers at Faridpur, Dhaka, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                Date: 27 February 2025 (Thursday)<br/>
                                                                                <span style={{color:'#296173'}}>
                                                                                Price: 
                                                                                <strike>BDT 9,500 ≈ USD 80</strike> (Sponsored by the conference secretariat)</span><br/>
                                                                                Seats left: {30-tour3}
                                                                            </b>
                                                                            <br/>
                                                                            Visit Faridpur to learn about the challenges, opportunities and needs of sanitation workers. The visitors will get the opportunity to hear directly from the sanitation workers about their transformative cooperative model and discuss the next steps in improving their lives and livelihoods. At the same time, the visitors will get the chance to visit the Faridpur faecal sludge treatment plant.
                                                                            <br/>
                                                                            {/* <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a> */}
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
                                                                                Tour 4 | Omni Processor at Cox’s Bazar, Chattogram, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                Date : 28 February - 01 March 2025 (Friday - Saturday)
                                                                            <br/>
                                                                                <span style={{color:'#296173'}}>Price: BDT 47,000 ≈ USD 400</span><br/>
                                                                                Seats left: {25-tour4}
                                                                            </b>
                                                                            <br/>
                                                                            Visit the Omni Processor at Cox’s Bazar, a groundbreaking technology introduced for the 1st time in Bangladesh. This technology converts faecal sludge into clean water, and electricity. The visitors will have the opportunity to witness this innovative solution which addresses the sanitation challenges, providing scope for sustainable waste management and resource recovery.
                                                                            <br/>
                                                                            {/* <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a> */}
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
                                                                                Tour 5 | Faecal Sludge Treatment Plant at Saidpur, Nilphamari, Bangladesh
                                                                            </label>
                                                                            <br/>
                                                                            <b>
                                                                                Date : 28 February - 01 March 2025 (Friday - Saturday)<br/>
                                                                                <span style={{color:'#296173'}}>Price: BDT 36,500 ≈ USD 300</span><br/>
                                                                                Seats left: {25-tour5}
                                                                            </b>
                                                                            <br/>
                                                                            Explore the Faecal Sludge Treatment Plant (FSTP) in Saidpur, a vital facility that ensures safe and effective treatment of faecal sludge (FS) and solid waste (SW). This tour will highlight the processes involved in FS and SW treatment, from collection to disposal, and the measures taken to prevent environmental contamination. The visitors will gain insights into the plant's capacity, technology used, and the role it plays in improving public health and sanitation in the region.
                                                                            <br/>
                                                                            {/* <a style={{
                                                                                fontSize: "18px",
                                                                                fontWeight: "bold"
                                                                            }} href="#" target="_blank">
                                                                                Learn More
                                                                            </a> */}
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

export default Step5