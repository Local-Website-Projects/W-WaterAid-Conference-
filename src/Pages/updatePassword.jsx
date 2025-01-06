import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Menu from "../Components/menu";
import axios from "axios";
function UpdatePassword (){

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    function updatePassword(event) {
        event.preventDefault();
        if(confirmPassword !== newPassword){
            alert ('Password and confirm password do not match!');
        } else{
            const url = '/api/update_password.php';
            let fData = new FormData();
            fData.append('password', password);
            fData.append('newPassword', newPassword);
            fData.append('confirmPassword', confirmPassword);
            axios.post(url, fData)
                .then(response => {
                    if(response.data.status === "Success"){
                        alert('Password Updated Successfully!');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network error occurred');
                });
        }
    }
    return (
        <div>
            <div className="main-container">
                <Menu/>
                <div className="container mt-3 mb-5">
                    <div className="row event-schedule-area-two ct-2 contact-area pad100">
                        <div className="col-lg-4 col-md-4 col-12">
                            <ul className="nav custom-tab" id="myTab" role="tablist" style={{display: "inline"}}>
                                <li className="nav-item mt-5">
                                    <Link className="nav-link" id="home-taThursday" to='/Profile'>General
                                        information</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                       href="https://regtoiletconference.org/user_invoice/index.php" target='_blank'>Download
                                        Invoice</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Update-Password">Update Password</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-8">
                                <div className="contact ct-form">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <h4 className="mb-5">Update Password</h4>
                                            <div className="contact-form">
                                                <form onSubmit={updatePassword}>
                                                    <div className="form-group">
                                                        <input id="inputName" type="password" name="password" value={password}
                                                               onChange={(e) => setPassword(e.target.value)}
                                                               className="form-control" placeholder="Old Password" required={true}
                                                               />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="inputEmail" type="password" name="newPassword" value={newPassword}
                                                               onChange={(e) => setNewPassword(e.target.value)}
                                                               className="form-control" placeholder="New Password" minLength={8} required={true}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="inputSubject" type="password" name="confirm_password"
                                                               value={confirmPassword}
                                                               onChange={(e) => setConfirmPassword(e.target.value)}
                                                               className="form-control" placeholder="Re-Enter your new password"
                                                               required={true}/>
                                                    </div>
                                                    <div className="btn-2">
                                                        <button className="btn-primary"
                                                                type="submit">Update Password
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
            </div>
        </div>
    )
}

export default UpdatePassword