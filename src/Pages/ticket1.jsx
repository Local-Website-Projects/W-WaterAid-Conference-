import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function TicketPurchase1() {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("2");
    const [student, setStudent] = useState("");
    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);
    const [institution, setInstitution] = useState([]);
    const [organization, setOrganization] = useState([]);
    const [designation, setDesignation] = useState([]);

    const [activeStep, setActiveStep] = useState(1);

    const steps = ['General information', 'Professional/Academic Information', 'Visa Invitation','Requirements', 'Technical Tour', 'Notifications'];

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Allowed file types (MIME types)
            const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
            const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

            // Check file type
            if (!allowedFileTypes.includes(file.type)) {
                alert("Invalid file type. Please upload a JPG, PNG, or PDF file.");
                e.target.value = ""; // Reset the file input field
                return;
            }

            // Check file size
            if (file.size > maxFileSize) {
                alert("File size exceeds 5MB. Please upload a smaller file.");
                e.target.value = ""; // Reset the file input field
                return;
            }

            // If valid, set the file state
            setFile(file); // Store the file in state
        }
    };

    const [file, setFile] = useState(null);

    const handleTicket = (event) => {
        event.preventDefault();
        const url = '/api/purchase_ticket.php';
        let fData = new FormData();
        fData.append('student', student);
        fData.append('institution', institution);
        fData.append('organization', organization);
        fData.append('designation', designation);
        fData.append('file', file);
        fData.append('flag', flag);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if(response.data === "Success"){
                    navigate("/Third-Step");
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
                    setStudent(response.data.student);
                    if(student === 'Student'){
                        setInstitution(response.data.organization);
                    }
                    if (student === 'Employed') {
                        setOrganization(response.data.organization);
                    }
                    setDesignation(response.data.designation);
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
                    <div className="row">
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
                        <div className="col-xl-12">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form"
                                                  onSubmit={handleTicket}>
                                                <div className="col-12">
                                                    <label>Select your employment status *</label>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="flexRadioFemale"
                                                            checked={student === "Employed"}
                                                            onChange={() => setStudent("Employed")}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor="flexRadioFemale">
                                                            Employed
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="flexRadioFemale"
                                                            checked={student === "Freelancer"}
                                                            onChange={() => setStudent("Freelancer")}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor="flexRadioFemale">
                                                            Freelancer
                                                        </label>
                                                    </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="flexRadioFemale"
                                                                checked={student === "Student"}
                                                                onChange={() => setStudent("Student")}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                Student
                                                            </label>
                                                        </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="flexRadioFemale"
                                                            checked={student === "Currently not employed"}
                                                            onChange={() => setStudent("Currently not employed")}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor="flexRadioFemale">
                                                            Currently not employed
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        {student === "Student" && (
                                                            <>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Name of
                                                                        institution *</label>
                                                                    <br></br><small>e.g., Dhaka University</small>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={institution}
                                                                        onChange={(e) => setInstitution(e.target.value)}
                                                                        required={student === "Student"}
                                                                    />
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="fileUpload">Upload a scanned copy
                                                                            of your
                                                                            student ID card (Must be in JPG, PNG, or PDF format,
                                                                            and under 5MB file size) *</label>
                                                                        <input
                                                                            type="file"
                                                                            id="fileUpload"
                                                                            className="form-control pt-3"
                                                                            onChange={handleFileChange}
                                                                            required={student === "Student"}
                                                                            accept=".jpg,.png,.pdf"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>

                                                        )}
                                                        {student === "Employed" && (
                                                            <>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Name of affiliated
                                                                        organisation *</label>
                                                                    <br></br><small>e.g., WaterAid Bangladesh</small>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={organization}
                                                                        onChange={(e) => setOrganization(e.target.value)}
                                                                        required={student === "Employed"}
                                                                    />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label
                                                                        htmlFor="otherGenderInput">Designation *</label>
                                                                    <br></br><small>e.g., Head of programmes</small>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={designation}
                                                                        onChange={(e) => setDesignation(e.target.value)}
                                                                        required={student === "Employed"}
                                                                    />
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <Link
                                                                to='/Ticket'>
                                                                <button className="btn-primary" name="submit-form"
                                                                        type="button">Back
                                                                </button>
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

export default TicketPurchase1