import React, {useState, useEffect} from "react";
import Header from "../Components/header";
import Banner from "../Components/banner";
import {useNavigate} from "react-router-dom";

function Home() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Define the async function
    const fetchSessionData = async () => {
        const token = localStorage.getItem("userToken");

        if (token) {
            setError("You are already logged in.");
            navigate("/Profile");
        }
        console.log(token);
    };

    // Call fetchSessionData on component mount
    useEffect(() => {
        fetchSessionData();
    }, []);
    return (
        <div>

            <div className="main-container">
                {/*header part start*/}
                <Header/>
                {/*header part end*/}

                {/*banner with form section starts*/}
                <Banner/>
                {/*banner with form section ends*/}
            </div>
            {/*<div className="generel-information-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 xs-mb40">
                            <img className="img-fluid" src="assets/img/mockup/vector.png" alt=""/>
                        </div>
                        <div className="col-lg-7">
                            <div className="generel-icons">
                                <ul>
                                    <li><img src="assets/img/feature/1.png" alt=""/></li>
                                    <li><img src="assets/img/feature/2.png" alt=""/></li>
                                    <li><img src="assets/img/feature/3.png" alt=""/></li>
                                    <li className="mr-0"><img src="assets/img/feature/4.png" alt=""/></li>
                                </ul>
                            </div>
                            <div className="inner-content">
                                <h2>General Information</h2>
                                <p>Lorem ipsum dolor sit amet, impediii reprehe ndunt est ei, sit ea alii omnis. Prima
                                    semper voluptatum sed in, hinc regione vel ut. Eum harum putant forensibus. Illud
                                    exerci vulp Lorem ipsum dolor sit amet, impediii reprehe ndunt est ei, sit ea alii
                                    omnis. Prima semper voluptatum sed in, hinc regione vel ut. Eum harum putant
                                    forensibus. Illud
                                </p>
                                <p>Lorem ipsum dolor sit amet, impediii reprehe ndunt est ei, sit ea alii omnis. Prima
                                    semper voluptatum sed in, hinc regione vel ut. Eum harum putant forensibus. Illud
                                    exerci vulp</p>
                                <div className="primary-btn">
                                    <a href="#" className="btn-primary">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-up-area pad100 bg-counter parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                            <div className="single-counter xs-mb40">
                                <div className="count-content">
                  <CountUp start={0} end={80} duration={2}/>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                            <div className="single-counter xs-mb40">
                                <div className="count-content">
                  <CountUp start={0} end={120} duration={2}/>
                                    <p>Programs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                            <div className="single-counter xs-mb40">
                                <div className="count-content">
                  <CountUp start={0} end={65} duration={2}/>
                                    <p>Speakers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
                            <div className="single-counter">
                                <div className="count-content">
                  <CountUp start={0} end={30} duration={2}/>
                                    <p>Sponsors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event-schedule-area-two bg-color pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text">
                                    <h2>Event Schedule</h2>
                                </div>
                                <p>In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse
                                    molestie<br/> cum te, sea lorem instructior at.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav custom-tab" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-taThursday" data-toggle="tab" href="#home"
                                       role="tab" aria-controls="home" aria-selected="true">Day 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                       role="tab" aria-controls="profile" aria-selected="false">Day 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact"
                                       role="tab" aria-controls="contact" aria-selected="false">Day 3</a>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <a className="nav-link" id="sunday-tab" data-toggle="tab" href="#sunday" role="tab"
                                       aria-controls="sunday" aria-selected="false">Day 4</a>
                                </li>
                                <li className="nav-item mr-0 d-lg-block">
                                    <a className="nav-link" id="monday-tab" data-toggle="tab" href="#monday" role="tab"
                                       aria-controls="monday" aria-selected="false">Day 5</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th className="text-center" scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th className="text-center" scope="col">Venue</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/1.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Harman Kardon</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>20</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/2.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="#">Toni Duggan</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room D3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box border-bottom-0">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>18</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/3.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="#">Billal Hossain</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room A3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th scope="col">Venue</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/2.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Toni Duggan</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/1.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Harman Kardon</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box border-bottom-0">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/3.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Billal Hossain</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel"
                                     aria-labelledby="contact-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th scope="col">Venue</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/1.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Harman Kardon</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/3.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Billal Hossain</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box border-bottom-0">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/2.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Toni Duggan</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sunday" role="tabpanel" aria-labelledby="sunday-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th scope="col">Venue</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/2.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Toni Duggan</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/1.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Harman Kardon</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box border-bottom-0">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/3.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Billal Hossain</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Speakers</th>
                                                <th scope="col">Session</th>
                                                <th scope="col">Venue</th>
                                                <th scope="col">Venue</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>16</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/1.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Harman Kardon</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>18</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/2.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Toni Duggan</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="inner-box border-bottom-0">
                                                <th scope="row">
                                                    <div className="event-date">
                                                        <span>20</span>
                                                        <p>Novembar</p>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="event-img">
                                                        <img src="assets/img/team/3.jpg" alt=""/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="event-wrap">
                                                        <h3><a href="speakers-single.html">Billal Hossain</a></h3>
                                                        <div className="meta">
                                                            <div className="organizers">
                                                                <a href="#">Aslan Lingker</a>
                                                            </div>
                                                            <div className="categories">
                                                                <a href="#">Inspire</a>
                                                            </div>
                                                            <div className="time">
                                                                <span>05:35 AM - 08:00 AM 2h 25'</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="r-no">
                                                        <span>Room B3</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="primary-btn">
                                                        <a className="btn-primary" href="#">Read More</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="primary-btn text-center">
                                <a href="#" className="btn-primary">Download Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-tables-area pad100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="title-text mb50">
                                    <h2>Pricing Tables</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing xs-mb30">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 55
                                    </div>
                                </div>
                                <div className="pricing-title">Personal</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing xs-mb30">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 75
                                    </div>
                                </div>
                                <div className="pricing-title">Business</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="pricing-box bg-pricing">
                                <div className="pricing-header">
                                    <div className="pricing-value">
                                        <span>$</span> 99
                                    </div>
                                </div>
                                <div className="pricing-title">Premium</div>
                                <div className="pricing-content">
                                    <ul>
                                        <li>1. Entrance</li>
                                        <li>2. Coffee Break referrentur</li>
                                        <li>3 One FREE bonus theme</li>
                                        <li>4. Free Lunch & Snacks.</li>
                                        <li>5. Certificate, Plugins & ebook</li>
                                    </ul>
                                </div>
                                <div className="bordered-btn">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default Home