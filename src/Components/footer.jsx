import React from "react";

function Footer () {
    return (
        <div>
            <div className="footer-area bg-footer parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright">
                                <p>Copyright © Toilet Conference/ 2025</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-end justify-content-end">
                            <div className="copyright">
                               <p>Powered By</p><a href="https://frogbid.com" target="_blank"
                                         style={{color: "#29a9e1"}}> FrogBID</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer