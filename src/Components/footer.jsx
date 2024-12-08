import React from "react";

function Footer () {
    return (
        <div>
            <div className="footer-area bg-footer parallax ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="am">
                                <div className="f-logo">
                                    <img src="assets/img/logo/logo-2.png" alt="" height='300px'/>
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
                                <p>©2024. All Rights Reserved. Designed By</p>
                                <em><i className="fa fa-heart"></i></em>&nbsp;<a href="#">FrogBID</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer