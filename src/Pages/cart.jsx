import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/footer";
import Menu from "../Components/menu";

function Cart() {
    const [userId, setUserId] = useState("");
    const [tours, setTours] = useState([]);
    const [subTotal, setSubTotal] = useState(0);  // Initialized as number
    const [total, setTotal] = useState(0);        // Initialized as number
    const [discount, setDiscount] = useState(0);  // Initialized as number
    const [registrationPromo, setRegistrationPromo] = useState("");
    const [tourPromo, setTourPromo] = useState("");
    const [nationality, setNationality] = useState("");  // Holds the nationality
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [updateDate, setUpdateDate] = useState("");
    const [isBeforeDate, setIsBeforeDate] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [tourDiscount, setTourDiscount] = useState(0);
    const [tourGrandTotal, setTourGrandTotal] = useState(0);
    const [grandTotalUpdate, setGrandTotalUpdate] = useState(0);

    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            try {
                const response = await axios.get("/api/fetch_profile.php", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.data.status === "success") {
                    setUserId(response.data.userId);
                    setUpdateDate(response.data.updateDate);
                    setNationality(response.data.nationality);

                    // Compare updateDate with 01 Feb 2025
                    const fetchedUpdateDate = new Date(response.data.updateDate);
                    const comparisonDate = new Date("2025-02-01");

                    setIsBeforeDate(fetchedUpdateDate < comparisonDate);

                    // Extract and format tours
                    const tourValues = [
                        "Pre conference technical tour - Sakhipur",
                        "Post conference technical tour - Dasherkandi (DWASA)",
                        "Post conference technical tour - Faridpur",
                        "Post conference technical tour – Cox’s Bazar (DPHE)",
                        "Post conference technical tour – Saidpur (WaterAid)",
                    ];
                    const tourPricing = [100, 200, 300, 400, 500];

                    const toursArray = response.data.tours ? response.data.tours.split(",") : [];
                    const activeTours = toursArray
                        .map((isTrue, index) => (isTrue.trim() === "true" ? { name: tourValues[index], price: tourPricing[index] } : null))
                        .filter(Boolean);

                    setTours(activeTours);

                    // Calculate the total price
                    const calculatedTotalPrice = activeTours.reduce((sum, tour) => sum + tour.price, 0);
                    setTotalPrice(calculatedTotalPrice);
                    setTourGrandTotal(calculatedTotalPrice);
                    setGrandTotalUpdate(total + tourGrandTotal);
                } else {
                    setError(response.data.message || "Failed to fetch profile.");
                }
            } catch (err) {
                setError("Failed to fetch session data");
                console.error(err);
            }
        };

        // Fetch data initially and set polling
        fetchSessionData();
    }, [navigate]);

    useEffect(() => {
        // Set initial subtotal, total, and discount based on nationality and date
        if (isBeforeDate) {
            if (nationality === "Bangladeshi") {
                setSubTotal(12000);
                setTotal(12000);
                setDiscount(0);
                setGrandTotalUpdate(total + tourGrandTotal);
            } else {
                setSubTotal(100);  // Assuming foreign price is 100 USD
                setTotal(100);
                setDiscount(0);
                setGrandTotalUpdate(total + tourGrandTotal);
            }
        } else {
            if (nationality === "Bangladeshi") {
                setSubTotal(15000);
                setTotal(15000);
                setDiscount(0);
                setGrandTotalUpdate(total + tourGrandTotal);
            } else {
                setSubTotal(150);  // Assuming foreign price is 150 USD
                setTotal(150);
                setDiscount(0);
                setGrandTotalUpdate(total + tourGrandTotal);
            }
        }
    }, [isBeforeDate, nationality]);

    function verifyPromoRegistration(event) {
        event.preventDefault();
        const url = '/api/verify_registration_promo.php';
        let fData = new FormData();
        fData.append('registrationPromo', registrationPromo);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if (response.data.status === "Success") {
                    alert('Promo Code is applied successfully');
                    const percent = parseFloat(response.data.value);  // Ensure it's a number
                    const newDiscount = total * (percent / 100);
                    const newTotal = total - newDiscount;

                    setDiscount(newDiscount);
                    setTotal(newTotal);
                    setGrandTotalUpdate(total + tourGrandTotal);
                } else {
                    alert("Invalid promo code");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }

    function verifyTourPromo(event) {
        event.preventDefault();
        const url = '/api/verify_tour_promo.php';
        let fData = new FormData();
        fData.append('tourPromo', tourPromo);
        axios.post(url, fData)
            .then(response => {
                console.log(response.data);
                if (response.data.status === "Success") {
                    alert('Promo Code is applied successfully');
                    const percent = parseFloat(response.data.value);  // Ensure it's a number
                    const newDiscount = totalPrice * (percent / 100);
                    const newTotal = tourGrandTotal - newDiscount;

                    setTourDiscount(newDiscount);
                    setTourGrandTotal(newTotal);
                    setGrandTotalUpdate(total + tourGrandTotal);
                } else {
                    alert("Invalid promo code");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }

    return (
        <div>
            <Menu />
            <div className="container mt-5">
                <h4>Cart</h4>
                <h6 className="mt-5">Items</h6>
                <hr />
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
                    {isBeforeDate ? (
                        nationality === "Bangladeshi" ? (
                            <tr>
                                <th scope="row">1</th>
                                <td>Early Bird Registration (Bangladeshi)</td>
                                <td>1</td>
                                <td>{subTotal} BDT</td>
                                <td>{subTotal} BDT</td>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="row">1</th>
                                <td>Early Bird Registration (Foreign)</td>
                                <td>1</td>
                                <td>{subTotal} USD</td>
                                <td>{subTotal} USD</td>
                            </tr>
                        )
                    ) : nationality === "Bangladeshi" ? (
                        <tr>
                            <th scope="row">1</th>
                            <td>Regular Registration (Bangladeshi)</td>
                            <td>1</td>
                            <td>{subTotal} BDT</td>
                            <td>{subTotal} BDT</td>
                        </tr>
                    ) : (
                        <tr>
                            <th scope="row">1</th>
                            <td>Regular Registration (Foreign)</td>
                            <td>1</td>
                            <td>{subTotal} USD</td>
                            <td>{subTotal} USD</td>
                        </tr>
                    )}
                    <tr>
                        <th colSpan={4}>Sub-Total</th>
                        <td><b>{subTotal}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Discount</th>
                        <td><b>{discount}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <td><b>{total}</b></td>
                    </tr>
                    </tbody>
                </table>

                <div className="row mt-5">
                    <div className="col-6">
                        <form onSubmit={verifyPromoRegistration}>
                            <label>Promo code for registration:</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Promo Code"
                                value={registrationPromo}
                                onChange={(e) => setRegistrationPromo(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <button className="btn-primary mt-3" type="submit">
                                Apply
                            </button>
                        </form>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <h6>Tours Selection</h6>
                        <hr/>
                    </div>
                    <div className="col-12">
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
                            {tours.length > 0 ? (
                                tours.map((tour, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td> {/* Serial number */}
                                        <td>{tour.name}</td> {/* Tour name */}
                                        <td>1</td> {/* Always 1 */}
                                        <td>{tour.price}</td>
                                        <td>{tour.price}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No tours selected</td>
                                </tr>
                            )}

                            <tr>
                                <td colSpan="4"><b>Sub Total</b></td>
                                <td>{totalPrice}</td>
                            </tr>
                            <tr>
                                <td colSpan="4"><b>Discount</b></td>
                                <td>{tourDiscount}</td>
                            </tr>
                            <tr>
                                <td colSpan="4"><b>Total</b></td>
                                <td>{tourGrandTotal}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-6">
                        <form onSubmit={verifyTourPromo}>
                            <label>Promo code for tours:</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Promo Code"
                                value={tourPromo}
                                onChange={(e) => setTourPromo(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <button className="btn-primary mt-3" type="submit">
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Grand Total</td>
                            <td>{grandTotalUpdate}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row mt-3 mb-5 d-flex align-items-end justify-content-end">
                    <div className="col-2">
                        <button className="btn-primary mt-3" type="button" disabled={true}>
                            Pay Now
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn-primary mt-3" type="button">
                            Pay Later
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
