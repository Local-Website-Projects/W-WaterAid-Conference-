import React, {useState, useEffect} from "react";
import Header from "../Components/header";
import Banner from "../Components/banner";
import {useNavigate} from "react-router-dom";
import Footer from "../Components/footer";

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
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 pt-3">
                                <div className="xs-mb30">
                                    <div className="spk-img">
                                        <img className="img-fluid" src="assets/img/convenors/4.png" alt="trainer-img"/>
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
                                        <img className="img-fluid" src="assets/img/convenors/5.png" alt="trainer-img"/>
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
        </div>
    )
}

export default Home