import React from "react";
import {Link} from "react-router-dom";
import Footer from "../Components/footer";
function Cart() {
    return (
        <div>
            <header className="header base-style-2 white-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="brand-logo">
                                <a className="eventex-brand" href="index-2.html"><img
                                    src="assets/img/logo/logo-3.png" alt=""/></a>
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
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Profile">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Ticket">Ticket Purchase </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Accommodation">Accommodation
                                                Offer </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Logout">Logout </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-5">
                <h4>Cart</h4>

                <p className="mt-5">Items</p>
                <hr></hr>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Early Bird Registration</td>
                        <td>1</td>
                        <td>15,000/=</td>
                        <td>15,000/=</td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Sub-Total</th>
                        <td><b>15,000/=</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Discount</th>
                        <td><b>0/=</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <td><b>15,000/=</b></td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <Footer/>
        </div>
    )
}

export default Cart