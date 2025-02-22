import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function Profile() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [student, setStudent] = useState("");
    const [organization, setOrganization] = useState("");
    const [designation, setDesignation] = useState("");
    const [visaInvitation, setVisaInvitation] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [passportFile, setPassportFile] = useState("");
    const [dietary, setDietary] = useState("");
    const [accessibility, setAccessibility] = useState("");
    const [language, setLanguage] = useState("");
    const [tours, setTours] = useState([]);
    const [error, setError] = useState("");
    const [uniqueId, setUniqueId] = useState("");
    const navigate = useNavigate();
    const [formattedDate, setFormattedDate] = useState("");
    const [formattedExpireDate, setFormattedExpireDate] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(0);

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
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.data.status === "success") {
                    console.log(response.data);
                    setUserId(response.data.userId);
                    setTitle(response.data.title);
                    setFirstName(response.data.firstName);
                    setSurname(response.data.surname);
                    setEmail(response.data.email);
                    setPhone(response.data.phone);
                    setCountry(response.data.country);
                    setNationality(response.data.nationality);
                    setGender(response.data.gender);
                    setBirthYear(response.data.birthYear);
                    setStudent(response.data.student);
                    setOrganization(response.data.organization);
                    setDesignation(response.data.designation);
                    setVisaInvitation(response.data.visaInvitation);
                    setPassportNo(response.data.passportNo);
                    setIssueDate(response.data.issueDate);
                    setExpireDate(response.data.expireDate);
                    setPassportFile(response.data.passportFile);
                    setDietary(response.data.dietary);
                    setAccessibility(response.data.accessibility);
                    setLanguage(response.data.language);
                    setUniqueId(response.data.uniqueId);

                    const tourValues = [
                        "Tour 1 | Faecal Sludge Treatment Plant at Sakhipur, Tangail, Bangladesh",
                        "Tour 2 | Public Toilet and Low Income Community Visit at Dhaka, Bangladesh",
                        "Tour 3 | A day with sanitation workers at Faridpur, Dhaka, Bangladesh",
                        "Tour 4 | Omni Processor at Cox’s Bazar, Chattogram, Bangladesh",
                        "Tour 5 | Faecal Sludge Treatment Plant at Saidpur, Nilphamari, Bangladesh",
                    ];

                    const toursArray = response.data.tours ? response.data.tours.split(",") : [];

                    const activeTours = toursArray
                        .map((isTrue, index) => (isTrue.trim() === "true" ? tourValues[index] : null))
                        .filter(Boolean);

                    setTours(activeTours);

                    if (response.data.issueDate) {
                        const issueDateObj = new Date(response.data.issueDate);
                        const formatted = new Intl.DateTimeFormat("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        }).format(issueDateObj);
                        setFormattedDate(formatted);
                    }

                    if (response.data.expireDate) {
                        const expireDateObj = new Date(response.data.expireDate);
                        const formattedExpire = new Intl.DateTimeFormat("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        }).format(expireDateObj);
                        setFormattedExpireDate(formattedExpire);
                    }
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
            try {
                const response = await axios.get("/api/fetch_payment_status.php", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.data.status === "success") {
                    setPaymentStatus(response.data.paymentStatus);
                } else {
                    setError(response.data.message || "Failed to fetch status.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        // Call the function initially
        fetchSessionData();

        // Set up polling
        const interval = setInterval(fetchSessionData, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [navigate]);


    return (<div>
        <div className="main-container">
            <Menu/>
            <div className="container mt-3 mb-5">
                <div className="row event-schedule-area-two">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ul className="nav custom-tab" id="myTab" role="tablist" style={{display: "inline"}}>
                            <li className="nav-item mt-5">
                                <Link className="nav-link active" id="home-taThursday" to='/Profile'>General information</Link>
                            </li>
                            <li className="nav-item">
                                {paymentStatus === '0' ? (
                                    <>
                                    <a className="nav-link" href="https://regtoiletconference.org/user_invoice/index.php" target='_blank'>Download invoice</a>
                                    <Link className="nav-link" to="/Proof">Proof of payment</Link>
                                    <a className="nav-link" href="https://regtoiletconference.org/api/payment" target='_blank'>Pay Online</a>
                                    </>
                                ) : (
                                    <a className="nav-link"
                                       href={`https://regtoiletconference.org/user_invoice/confirmation.php?user=${uniqueId}`} target='_blank'>Download
                                        confirmation</a>
                                )}

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Update-Password">Update password</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="row">
                            <div className="col-12 mt-5 mb-3">
                                <h4>Personal information:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6>Full name</h6>
                            </div>
                            <div className="col-6">
                                <p>{title} {firstName} {surname}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <h6>Email address</h6>
                            </div>
                            <div className="col-6">
                                <p>{email}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <h6>Contact number</h6>
                            </div>
                            <div className="col-6">
                                <p>{phone}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col-6">
                                    <h6>Country of residence</h6>
                                </div>
                                <div className="col-6">
                                    <p>{country}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Nationality</h6>
                                </div>
                                <div className="col-6">
                                    <p>{nationality}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Gender</h6>
                                </div>
                                <div className="col-6">
                                    <p>{gender}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Birth year</h6>
                                </div>
                                <div className="col-6">
                                    <p>{birthYear}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Organisation / Institution</h6>
                                </div>
                                <div className="col-6">
                                    <p>{organization}</p>
                                </div>
                            </div>
                            {{student} === 'No' && (
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <h6>Designation</h6>
                                    </div>
                                    <div className="col-6">
                                        <p>{designation}</p>
                                    </div>
                                </div>
                            )}
                            {{visaInvitation} === 'Yes' && (
                                <>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <h6>Passport no</h6>
                                        </div>
                                        <div className="col-6">
                                            <p>{passportNo}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <h6>Passport issue date</h6>
                                        </div>
                                        <div className="col-6">
                                            <p>{formattedDate}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <h6>Passport expire date</h6>
                                        </div>
                                        <div className="col-6">
                                            <p>{formattedExpireDate}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Dietary preference</h6>
                                </div>
                                <div className="col-6">
                                    <p>{dietary}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Accessibility needs</h6>
                                </div>
                                <div className="col-6">
                                    <p>{accessibility}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Language preference</h6>
                                </div>
                                <div className="col-6">
                                    <p>{language}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <h6>Tours</h6>
                                </div>
                                <div className="col-6">
                                    {tours.length > 0 ? (
                                        tours.map((tour, index) => <p key={index}>{tour}</p>)
                                    ) : (
                                        <p>No tours selected</p>
                                    )}
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        {paymentStatus === '0' ? (
                            <button style={{cursor: 'default'}} className="btn btn-danger">Payment status: Due</button>
                        ) : (
                            <button style={{cursor: 'default'}} className="btn btn-success">Payment status: Paid
                    </button>
                    )}
                </div>
                </div>
            </div>

            <Footer/>
        </div>
        </div>
    );
}

export default Profile;
