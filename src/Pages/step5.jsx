import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";

function Step5 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("5");
    const [tour, setTour] = useState("");

    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);

    const [selectedTours, setSelectedTours] = useState({
        dasherkandi: false,
        munda: false,
        faridpur: false
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
        const selectedToursString = `${selectedTours.dasherkandi},${selectedTours.munda},${selectedTours.faridpur}`;
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
                                                                        name="dasherkandi"
                                                                        checked={selectedTours.dasherkandi}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Pre conference technical tour – Dasherkandi
                                                                    </label>
                                                                    <br></br><small>Dhaka, Bangladesh<br></br>
                                                                    24 February 2025<br></br>
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
                                                                        name="munda"
                                                                        checked={selectedTours.munda}
                                                                        onChange={handleCheckboxChange}
                                                                        id="flexCheckPreConference"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        Post conference technical tour - Munda Community
                                                                    </label>
                                                                    <br></br><small>Shatkhira, Bangladesh<br></br>
                                                                    27 February 2025<br></br>
                                                                    Visit the Munda community in Shatkhira to understand
                                                                    the unique sanitation challenges faced by indigenous
                                                                    communities. This tour will showcase WaterAid’s
                                                                    initiatives to promote sustainable sanitation
                                                                    practices and improve hygiene standards within the
                                                                    Munda community. Participants will have the chance
                                                                    to interact with community members, learn about
                                                                    their traditional practices, and see firsthand the
                                                                    positive changes brought about by targeted
                                                                    sanitation interventions.
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
                                                                        Faridpur technical tour
                                                                    </label>
                                                                    <br></br><small>Faridpur, Bangladesh<br></br>
                                                                    To be confirmed<br></br>
                                                                    Visit Faridpur and learn about the challenges,
                                                                    opportunities, needs and desired of sanitation
                                                                    workers from 6 regional towns across south west
                                                                    Bangladesh. This Sanitation Workers' Forum will
                                                                    place the voices of sanitation workers on the center
                                                                    stage. The field visit will hear from sanitation
                                                                    workers about Practical Action's Transformative
                                                                    Cooperative Model and SKATE Waste's private
                                                                    sanitation worker model. participants will also hear
                                                                    from independant sanitation workers who have not
                                                                    received any external support. Participants will
                                                                    visit the Faridpur feacal sludge treatment plant,
                                                                    and will ahve the opportunity to discuss with
                                                                    sanitation workers, muncipality leaders and
                                                                    Government leaders the next steps in improving the
                                                                    lives and livelihoods of sanitation workers.
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