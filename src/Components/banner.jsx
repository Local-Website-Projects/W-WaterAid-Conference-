import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Banner () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [student, setStudent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (name.length === 0) {
            alert("Name has left Blank!");
        } else if (number.length === 0) {
            alert("Phone has left Blank!");
        } else if (email.length === 0) {
            alert("Email has left Blank!");
        } else if (password.length === 0) {
            alert("Password has left Blank!");
        } else {
            const url = 'https://conference.frogbid.com/api/register_user.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('number', number);
            fData.append('email', email);
            fData.append('password', password);
            fData.append('student', student);
            axios.post(url, fData)
                .then(response => {
                    alert(response.data);
                    // Reset form fields to empty after successful submission
                    setName('');
                    setEmail('');
                    setNumber('');
                    setPassword('');
                    setStudent('');
                    if(response.data === "Your Account is created successfully! Please login to continue."){
                        navigate("/Login");
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
            <div className="hero-banner-area home-4  hero-bg-3 parallax no-attm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                            <div className="banner-content">
                                <h1>Toilet</h1>
                                <h2>Conference 2025</h2>
                                <p>Dhaka, Bangladesh | 25-26 February 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-box">
                                <div className="inner-content">
                                    <h3>Guests Registration</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-7">
                                                <label>Full Name</label>
                                                <input className="form-control" type="text"
                                                       placeholder="Write your full name (e.g., Adnan Ahmmed)"
                                                       name="full_name" value={name}
                                                       onChange={(e) => setName(e.target.value)}
                                                       required autoComplete="off"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <label>Contact Number</label>
                                                <input className="form-control" type="text" name="number" value={number}
                                                       onChange={(e) => setNumber(e.target.value)}
                                                       placeholder="Write your contact number with country code"
                                                       autoComplete="off" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <label>Email</label>
                                                <input className="form-control" type="email"
                                                       placeholder="Please enter your email"
                                                       name="email" value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       required autoComplete="off"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <lable>Password</lable>
                                                <input className="form-control" type="password" name="password"
                                                       value={password}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       placeholder="Please choose a strong password" required
                                                       autoComplete="off"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexCheckChecked"
                                                        name="student"
                                                        checked={student === 1} // The checkbox is checked if `student` is 1
                                                        onChange={(e) => setStudent(e.target.checked ? 1 : 0)} // Set `student` to 1 if checked, 0 if unchecked
                                                    />
                                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        I am a Student
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-primary" type="button" name="submit" id="submit"
                                                        onClick={handleSubmit}>Register Now
                                                </button>
                                            </div>
                                            <div className='p-3'>
                                                <p>You already have an account? <Link to="/Login">Log In.</Link></p>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;