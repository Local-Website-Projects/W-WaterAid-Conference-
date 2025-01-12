import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../Components/footer";
import Menu from "../Components/menu";
import Modal from "react-modal";

function Step3 () {
    const navigate = useNavigate();
    const [flag, setFlag] = useState("3");
    const [invitation, setInvitation] = useState("");
    const [passport, setPassport] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [activeStep, setActiveStep] = useState(2);
    const [isModalOpen, setModalOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(0);

    const openModal = (event) => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
        setConfirmed(1);
    }


    const steps = ['General information', 'Professional/Academic Information', 'Visa Invitation','Requirements', 'Technical Tour', 'Notifications'];

    const [errorMessage, setErrorMessage] = useState("");

    const handleExpireDateChange = (e) => {
        const selectedExpireDate = e.target.value;

        // Validate if expire date is greater than issue date
        if (issueDate && new Date(selectedExpireDate) <= new Date(issueDate)) {
            setErrorMessage("Expiration date must be later than the issue date.");
        } else {
            setErrorMessage(""); // Clear the error message
        }

        setExpireDate(selectedExpireDate);
    };
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

    const [userName, setUserName] = useState([]);
    const [error, setError] = useState([]);
    const [file, setFile] = useState(null);


    const handleTicket = (event) => {
        event.preventDefault();


        if (new Date(expireDate) <= new Date(issueDate)) {
            setErrorMessage("Expiration date must be later than the issue date.");
            return;
        }

        if(confirmed === 0){
            openModal();
            return;
        }
        const url = '/api/purchase_ticket.php';
        let fData = new FormData();
        fData.append('invitation', invitation);
        fData.append('passport', passport);
        fData.append('issueDate', issueDate);
        fData.append('expireDate', expireDate);
        fData.append('file', file);
        fData.append('flag', flag);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if(response.data === "Success"){
                    navigate("/Fourth-Step");
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
                    setInvitation(response.data.visa_invitation);
                    setPassport(response.data.passport_no);
                    setIssueDate(response.data.issue_date);
                    setExpireDate(response.data.expire_date);
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
                    <div>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                                },
                                content: {
                                    position: 'relative',
                                    backgroundColor: 'white',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    width: '400px',
                                    height: 'auto',
                                    maxHeight: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                },
                            }}
                        >
                            <h2>Alert</h2>
                            <p style={{fontWeight:'bold'}}>Please be aware that the information you provide cannot be modified later.</p>
                            <p>Ensure that all the details are correct before submitting.</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <button className='btn btn-primary' onClick={closeModal}>Ok</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
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
                                            <form id="contact-form" data-toggle="validator" role="form" onSubmit={handleTicket}>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Do you need visa invitation letter? *</label>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="invitation"
                                                                id="flexRadioFemale"
                                                                checked={invitation === "Yes"}
                                                                onChange={() => setInvitation("Yes")}
                                                                required={true}
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
                                                                name="invitation"
                                                                id="flexRadioFemale"
                                                                checked={invitation === "No"}
                                                                onChange={() => setInvitation("No")}
                                                                required={true}
                                                            />
                                                            <label className="form-check-label"
                                                                   htmlFor="flexRadioFemale">
                                                                No
                                                            </label>
                                                        </div>
                                                        {invitation === "Yes" && (
                                                            <>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Provide passport
                                                                        number *</label>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={passport}
                                                                        onChange={(e) => setPassport(e.target.value)}
                                                                        required={invitation === "Yes"}
                                                                    />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="issueDate">Passport issue date
                                                                        *</label>
                                                                    <br/>
                                                                    <small>Please input date (Format mm/dd/yyyy)</small>
                                                                    <input
                                                                        type="date"
                                                                        id="issueDate"
                                                                        className="form-control"
                                                                        value={issueDate}
                                                                        onChange={(e) => setIssueDate(e.target.value)}
                                                                        required={invitation === "Yes"}
                                                                    />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="expireDate">Passport expiration date
                                                                        *</label>
                                                                    <br/>
                                                                    <small>Please input date (Format mm/dd/yyyy)</small>
                                                                    <input
                                                                        type="date"
                                                                        id="expireDate"
                                                                        className="form-control"
                                                                        value={expireDate}
                                                                        onChange={handleExpireDateChange}
                                                                        required={invitation === "Yes"}
                                                                    />
                                                                    {errorMessage && (
                                                                        <small
                                                                            style={{color: "red"}}>{errorMessage}</small>
                                                                    )}
                                                                </div>
                                                                <div className="col-12 mt-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="fileUpload">Upload scanned copy
                                                                            of your passport (Must be in JPG, PNG, or
                                                                            PDF format, and under 5MB file size)
                                                                            *</label>
                                                                        <input
                                                                            type="file"
                                                                            id="fileUpload"
                                                                            className="form-control pt-3"
                                                                            onChange={handleFileChange}
                                                                            required={invitation === "Yes"}
                                                                            accept=".jpg,.png,.pdf"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>

                                                        )}

                                                        {invitation === 'No' && (
                                                            <>
                                                                <div className="mt-3">
                                                                    <label htmlFor="otherGenderInput">Enter your ID
                                                                        number (Passport/ NID/ Driving license) *</label>
                                                                    <input
                                                                        type="text"
                                                                        id="otherGenderInput"
                                                                        className="form-control"
                                                                        value={passport}
                                                                        onChange={(e) => setPassport(e.target.value)}
                                                                        required={invitation === "No"}
                                                                    />
                                                                </div>
                                                                <div className="col-12 mt-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="fileUpload">Upload scanned copy
                                                                            of your Passport/ NID/ Driving license (Must be in JPG, PNG, or
                                                                            PDF format, and under 5MB file size)
                                                                            *</label>
                                                                        <input
                                                                            type="file"
                                                                            id="fileUpload"
                                                                            className="form-control pt-3"
                                                                            onChange={handleFileChange}
                                                                            required={invitation === "No"}
                                                                            accept=".jpg,.png,.pdf"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <Link
                                                                to='/Second-Step'>
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

export default Step3