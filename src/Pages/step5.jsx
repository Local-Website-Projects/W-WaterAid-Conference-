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

    const [selectedTours, setSelectedTours] = useState({
        sakhipur: false,
        dasherkandi: false,
        faridpur: false,
        coxs: false,
        saidpur: false

    });

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
                                    <a className="nav-link active" id="sunday-tab" data-toggle="tab" href="#sunday">Requirements</a>
                                </li>
                                <li className="nav-item mr-0 d-none d-lg-block">
                                    <a className="nav-link active" id="monday-tab" data-toggle="tab" href="#monday">Technical Tour</a>
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
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="sakhipur"
                                                                        checked={selectedTours.sakhipur}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Pre conference technical tour - Sakhipur
                                                                    </label>
                                                                    <br></br><small>Sakhipur, Bangladesh<br></br>
                                                                    8500 BDT/70 USD<br></br>
                                                                    24 February 2025<br></br>
                                                                    Sakhipur FSTP, located in the Tangail district under
                                                                    Sakhipur Municipality. This generates approximately
                                                                    15,000 liters of faecal sludge and 8,000 kilograms
                                                                    of household solid waste daily. However, the Shit
                                                                    Flow Diagram (SFD) at the time indicated that none
                                                                    of the faecal sludge was being safely managed,
                                                                    posing significant environmental and public health
                                                                    risks.<br></br>
                                                                    To address this challenge, WaterAid Bangladesh, in
                                                                    partnership with the BASA Foundation, provided
                                                                    technical and financial support to the Sakhipur
                                                                    municipal authority. Together, they established an
                                                                    integrated and efficient faecal sludge and solid
                                                                    waste management system. Central to this initiative
                                                                    is the Sakhipur co-compost plant, which spans an
                                                                    area of approximately 11,500 square feet and is now
                                                                    operated by the municipal authority.<br></br>
                                                                    The plant plays a critical role in mitigating
                                                                    environmental hazards by managing both faecal sludge
                                                                    and solid waste. It ensures the sanitation value
                                                                    chain is upheld—from containment to safe reuse or
                                                                    disposal. The plant produces a high-quality
                                                                    co-compost that has gained popularity among local
                                                                    farmers, further promoting sustainability and
                                                                    resource recovery.<br></br>
                                                                    Notably, the Faecal Sludge Treatment Plant (FSTP) in
                                                                    Sakhipur has been recognized as a replicable model
                                                                    and included in the Government of Bangladesh’s 8th
                                                                    Five-Year Plan. This recognition underscores the
                                                                    potential for scaling up such initiatives to enhance
                                                                    sanitation management across the country.<br></br>
                                                                    Visitors to the plant will witness firsthand how an
                                                                    innovative, community-focused approach can transform
                                                                    waste management into a integrated, sustainable and
                                                                    scalable solution for urban sanitation challenges.
                                                                </small>
                                                                </div>
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="dasherkandi"
                                                                        checked={selectedTours.dasherkandi}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Post conference technical tour - Dasherkandi
                                                                        (DWASA)
                                                                    </label>
                                                                    <br></br><small>Dhaka, Bangladesh<br></br>
                                                                    7000 BDT/55 USD<br></br>
                                                                    27 February 2025<br></br>
                                                                    The Dasherkandi Sewage Treatment Plant has set
                                                                    several records, including becoming the first and
                                                                    the largest modern sewage treatment plant in
                                                                    Bangladesh, the largest single sewage treatment
                                                                    plant in South Asia, and the first modern sludge
                                                                    drying-incineration in Bangladesh.
                                                                </small>
                                                                </div>
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="faridpur"
                                                                        checked={selectedTours.faridpur}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Post conference technical tour -Faridpur
                                                                    </label>
                                                                    <br></br><small>Faridpur, Bangladesh<br></br>
                                                                    9000 BDT/75 USD<br></br>
                                                                    27 February 2025<br></br>
                                                                    Visit Faridpur and learn about the challenges,
                                                                    opportunities, needs and desired of sanitation
                                                                    workers from 6 regional towns across south west
                                                                    Bangladesh. This Sanitation Workers' Forum will
                                                                    place the voices of sanitation workers on the center
                                                                    stage. The field visit will hear from sanitation
                                                                    workers about Practical Action's Transformative
                                                                    Cooperative Model and SKATE Waste's private
                                                                    sanitation worker model. participants will also hear
                                                                    from independent sanitation workers who have not
                                                                    received any external support. Participants will
                                                                    visit the Faridpur feacal sludge treatment plant,and
                                                                    will have the opportunity to discuss with sanitation
                                                                    workers, municipality leaders and Government leaders
                                                                    the next steps in improving the lives and
                                                                    livelihoods of sanitation workers.
                                                                </small>
                                                                </div>
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="coxs"
                                                                        checked={selectedTours.coxs}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Post conference technical tour – Cox’s Bazar
                                                                        (DPHE)
                                                                    </label>
                                                                    <br></br><small>Cox’s Bazar, Bangladesh<br></br>
                                                                    32000 BDT/260 USD<br></br>
                                                                    28 February 2025 – 1 March 2025<br></br>
                                                                    Omni Processor in Cox’s Bazar, a government
                                                                    initiative to introduce groundbreaking technology
                                                                    for the 1st time in Bangladesh that converts faecal
                                                                    sludge into clean water, electricity, and ash. This
                                                                    innovative solution addresses sanitation challenges
                                                                    in densely populated areas, providing sustainable
                                                                    waste management and resource recovery. Participants
                                                                    will have the opportunity to see the Omni Processor
                                                                    in action, understand its operational mechanics, and
                                                                    discuss its impact on local communities.
                                                                </small>
                                                                </div>
                                                                <div className="form-check mt-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="saidpur"
                                                                        checked={selectedTours.saidpur}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Post conference technical tour – Saidpur (WaterAid)
                                                                    </label>
                                                                    <br></br><small>Saidpur, Nilphamari,
                                                                    Bangladesh<br></br>
                                                                    25500 BDT/210 USD<br></br>
                                                                    28 February 2025 – 1 March 2025<br></br>
                                                                    Explore the Faecal Sludge Treatment Plant in
                                                                    Saidpur, a vital facility that ensures safe and
                                                                    effective treatment of faecal sludge and solid
                                                                    waste. This tour will highlight the processes
                                                                    involved in FS and SW treatment, from collection to
                                                                    disposal, and the measures taken to prevent
                                                                    environmental contamination. Attendees will gain
                                                                    insights into the plant's capacity, technology used,
                                                                    and the role it plays in improving public health and
                                                                    sanitation in the region.
                                                                </small>
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

export default Step5