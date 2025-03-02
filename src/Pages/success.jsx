import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";
function Success() {
    return (
        <>
            <div>
                <Header/>
                <div className="hero-banner-area home-4 hero-bg-3 parallax no-attm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="banner-content">
                                    <h1>Toilet Conference 2025</h1>
                                    <h2 style={{marginBottom: '0', marginTop: '20px'}}>Dhaka, Bangladesh | 25-26
                                        February
                                        2025</h2>
                                    <p style={{marginBottom: '0', marginTop: '20px'}}>Thank You for Being Part of Toilet
                                        Conference 2025!
                                        We have successfully concluded Toilet Conference 2025, and it would not have
                                        been possible without the incredible participation of
                                        sanitation professionals, policymakers, experts, and innovators from around the
                                        world. Your insights, engagement, and contributions
                                        have made this event truly impactful.</p>
                                    <p style={{marginBottom: '0', marginTop: '20px'}}>A special thank you to our
                                        partners and supporters for their unwavering commitment in making
                                        this conference a success. Your collaboration has played a vital role in
                                        advancing the global sanitation agenda.</p>
                                    <p style={{marginBottom: '0', marginTop: '20px'}}>As we close the registration
                                        portal, we encourage you to stay connected for more updates,
                                        insights, and future initiatives. Visit our Toilet Conference 2025 for regular
                                        updates. See you at the next Toilet Conference!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Convenors</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/1.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/2.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/3.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/4.png"
                                             style={{padding: '20px'}} alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Platinum partner</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/67b567b75d16d90e1d67c3a3_RFL%20logo.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Gold Partners</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678c7d472a97d5cedc37cb9a_2_%20BRAC%20logo.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678cd703337ee533c7c2e978_Black%20White%20Modern%20Handwritten%20Square%20Studio%20Logo%20(1).png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Strategic partners</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/67b572a6ac301840c0442088_DPHE.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-6 col-md-3 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center">
                                            <div className="title-text mb50 xs-mb40">
                                                <h2>Tech Partner</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="xs-mb30">
                                        <div className="spk-img">
                                            <img className="img-fluid"
                                                 src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678f6f362931d515dd4d8813_FrogBID%20Logo-p-500.png"
                                                 alt="trainer-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-6 col-md-3 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center">
                                            <div className="title-text mb50 xs-mb40">
                                                <h2>Hospitality partner</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="xs-mb30">
                                        <div className="spk-img">
                                            <img className="img-fluid"
                                                 src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/678debd790f45434f015e1ac_intercontinental_logo_BX7-p-500.png"
                                                 alt="trainer-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-6 col-md-3 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center">
                                            <div className="title-text mb50 xs-mb40">
                                                <h2>Payment gateway partner</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="xs-mb30">
                                        <div className="spk-img">
                                            <img className="img-fluid"
                                                 src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/6799d721742ca1725b5e493f_LOGO_SSLCOMMERZ-p-500.png"
                                                 alt="trainer-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Contributing partner</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/6799dcbdcff0fcdf98bcfdb1_bkash-logo-png_seeklogo-273684.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/67b56fab578a299e4bf0f604_Bhumijo.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid"
                                             src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/67b57012a75f5a8de0891eba_Tylox.png"
                                             alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whos-speaking-area pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="title-text mb50 xs-mb40">
                                        <h2>Supporters</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="https://cdn.prod.website-files.com/66e902391a56b034490ebf7e/6799d30d73e9b9e5cd812e73_undefined%20(1).png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/6.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/7.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/8.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/9.png" alt="trainer-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Success