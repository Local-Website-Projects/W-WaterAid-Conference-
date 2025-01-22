import React, {useEffect, useState} from "react";
import Menu from "../Components/menu";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../Components/footer";

function Proof () {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }
        };

        // Call the function initially
        fetchSessionData();

        // Set up polling
        const interval = setInterval(fetchSessionData, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [navigate]);

    function proofSubmit (event) {
        event.preventDefault();
        console.log('This is clicked');
        const url = '/api/submit_proof.php';
        let fData = new FormData();
        fData.append('accountNumber', accountNumber);
        fData.append('file', file);
        axios.post(url, fData)
            .then(response => {
                if(response.data === "Success"){
                    navigate("/Profile");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }

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
    return (
        <div>
            <Menu/>
            <div className="ct-2 contact-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact ct-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-form">
                                            <form id="contact-form" data-toggle="validator" role="form" onSubmit={proofSubmit}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Insert the last four digits of your Bank account number</lable>
                                                            <br></br><small
                                                            className="mb-3">for bank transfers only</small>
                                                            <input
                                                                id="inputName"
                                                                type="text"
                                                                name="bank"
                                                                className="form-control"
                                                                placeholder="XXXX"
                                                                value={accountNumber}
                                                                onChange={(e) => setAccountNumber(e.target.value)}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <lable>Upload your transaction receipt as proof of
                                                                transaction *
                                                            </lable>
                                                            <br></br><small
                                                            className="mb-3">(Must be in JPF, PNG or PDF file format and
                                                            under 5MB file size</small>
                                                            <input
                                                                id="inputName"
                                                                type="file"
                                                                name="proof"
                                                                className="form-control"
                                                                placeholder="John"
                                                                autoComplete="off"
                                                                required
                                                                style={{paddingTop: '15px'}}
                                                                onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">

                                                    </div>
                                                    <div className="col-6">
                                                        <div className="btn-2">
                                                            <button className="btn-primary" name="submit-form"
                                                                    type="submit">Submit
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
    )
}


export default Proof