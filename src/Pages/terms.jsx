import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../Components/footer";
import axios from "axios";

function Terms () {
    return (
        <div>
            <div className="main-container">
                <header className="header base-style-2 white-color pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="brand-logo">
                                    <a className="eventex-brand" href="index-2.html"><img
                                        src="assets/img/logo/logo-3.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="pricing-tables-area bg-color pad100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h4 className='mb-5'>Terms & Conditions</h4>
                                <p>By registering for the Toilet Conference 2025, you agree to the following terms and conditions:</p>
                                <p>1. Registration is confirmed only upon the completion of full payment.</p>
                                <p>2. WaterAid Bangladesh reserves the right to refuse or cancel registrations under specific circumstances</p>
                                <p>3. The Conference dates are subject to change in the event of unforeseen circumstances, including but not limited to political unrest or natural disasters in Bangladesh.</p>
                                <p>4. If the event is postponed, all registrations will remain valid for the rescheduled dates, and further updates will be informed.</p>
                                <p>5. In case of cancellation, participants will be informed promptly, and further instructions will be provided.</p>
                                <p>6. All participants are expected to behave respectfully towards fellow attendees, speakers, and organizers, maintaining professional decorum at all times.</p>
                                <p>7. Harassment, discrimination, or any behavior that disrupts the conference environment is strictly prohibited.</p>
                                <p>8. The Conference Secretariat reserves the right to remove any participant violating these terms and conditions without refund of registration fee.</p>
                                <p>9. By participating in the Conference, you consent to photography, videography, and audio recording by the conference organisers and its partners.</p>
                                <p>10. Your image, video, or audio may be used in promotional materials, reports, and digital content in accordance with Conference Secretariat’s content usage policies.</p>
                                <p>11. Any requests to access, modify, or delete your personal information can be directed to [wateraidbangladesh@wateraid.org].</p>
                                <p>12. WaterAid Bangladesh complies with GDPR/ UK Privacy Act, and Bangladesh ICT Act (2018), ensuring your personal data is stored securely and used only for Conference-related purposes.</p>
                                <p>13. All registration fees are non-refundable.</p>
                                <p>14. WaterAid Bangladesh is not liable for any personal injury, loss, or damage to property during the Conference.</p>
                                <p>15. Participants are responsible for arranging their own travel, accommodation, and personal insurance, unless otherwise determined by the Conference Secretariat.</p>
                                <p>16. All materials presented at the Conference, including but not limited to presentations, handouts, and session recordings, remain the intellectual property of the respective authors or Conference Secretariat.</p>
                                <p>17. Redistribution or unauthorized use of Conference materials without explicit permission is prohibited.</p>
                                <p>18. Conference Secretariat reserves the right to update or amend these terms and conditions at any time.</p>
                                <p>19. Any updates will be communicated to participants via email and the official conference website.</p>
                                <p>By completing your registration, you confirm that you have read, understood, and agree to these terms and conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms