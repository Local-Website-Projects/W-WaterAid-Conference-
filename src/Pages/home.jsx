import React from "react";

function Home() {
    return (
        <div>
            <div className='loader'>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--text'></div>
            </div>
            <div className="main-container">
                <header className="header base-style-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="brand-logo">
                                    <a className="eventex-brand" href="index-2.html"><img src="assets/img/logo/logo.png"
                                                                                          alt=""/></a>
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
                                            <li className="nav-item active dropdown">
                                                <a className="nav-link dropdown-toggle" href="#">Home <span
                                                    className="sr-only">(current)</span></a>
                                                <ul className="dropdown-menu animation  slideUpIn">
                                                    <li>
                                                        <a href="index-2.html">Home One</a>
                                                    </li>
                                                    <li>
                                                        <a href="home-2.html">Home Two</a>
                                                    </li>
                                                    <li>
                                                        <a href="home-3.html">Home Three</a>
                                                    </li>
                                                    <li>
                                                        <a href="home-4.html">Home four</a>
                                                    </li>
                                                    <li>
                                                        <a href="home-5.html">Home Five</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                                <ul className="dropdown-menu animation  slideUpIn">
                                                    <li>
                                                        <a href="about.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing.html">Pricing</a>
                                                    </li>
                                                    <li>
                                                        <a href="error-404.html">Error 404</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#">Speakers</a>
                                                <ul className="dropdown-menu animation  slideUpIn">
                                                    <li>
                                                        <a href="speakers.html">Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a href="speakers-single.html">Speakers Single</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#">Events</a>
                                                <ul className="dropdown-menu animation  slideUpIn">
                                                    <li>
                                                        <a href="event-schedule.html">Event Schedule</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-table.html">Event Table</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#">Blog</a>
                                                <ul className="dropdown-menu animation  slideUpIn">
                                                    <li>
                                                        <a href="blog-single.html">Blog Single</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-right.html">Blog Right</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="shopping.html">Shop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <ul>
                                    <li className="header-ticket">
                                        <a className="pr-0" href="#">Buy Ticket</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="hero-banner-area home-4  hero-bg-3 parallax no-attm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-5 d-none d-lg-block">
                                <div className="banner-content">
                                    <h1>Freelancers</h1>
                                    <h2>Conferences 2018</h2>
                                    <p>23-26 December 2020 with over 70 sessions - San Fancisco, CA</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-box">
                                    <div className="inner-content">
                                        <h3>Event Registration</h3>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-7">
                                                    <input className="form-control" type="text" placeholder="Name"
                                                           required/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input className="form-control" type="email" placeholder="E-mail"
                                                           required/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input className="form-control" type="text"
                                                           placeholder="Phone Number" required/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input className="form-control" type="text"
                                                           placeholder="Choose Ticket" required/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button className="btn-primary" type="submit">Register Now</button>
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
            <div className="generel-information-area pad100">
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
                                    <span className="count">80</span>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                            <div className="single-counter xs-mb40">
                                <div className="count-content">
                                    <span className="count">120</span>
                                    <p>Programs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                            <div className="single-counter xs-mb40">
                                <div className="count-content">
                                    <span className="count">65</span>
                                    <p>Speakers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
                            <div className="single-counter">
                                <div className="count-content">
                                    <span className="count">30</span>
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
            </div>
            <div className="footer-area bg-footer parallax ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="am">
                                <div className="f-logo">
                                    <img src="assets/img/logo/logo-2.png" alt=""/>
                                </div>
                                <div className="border-right"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-1">
                            <div className="f-content">
                                <div className="inner-content">
                                    <div className="f-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <span>5151 State Los Angeles<br/> California, TX 90032</span>
                                </div>
                                <p>Regione meliore liberavisse vim ei. Et mei nusquam corpora<br/> interesset. Mea zril
                                    expetendis conclusionemque id, id per<br/>saperet vituperatoribus, ei eam stet
                                    fabulas. Ne pla.</p>
                                <div className="sub-btn">
                                    <input type="text" placeholder="Your email address "/>
                                    <button type="submit">Subscribe</button>
                                </div>
                                <div className="f-social">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright">
                                <p>©2018. All Rights Reserved. Designed By</p>
                                <em><i className="fa fa-heart"></i></em>&nbsp;<a href="#">iThemesLab</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home