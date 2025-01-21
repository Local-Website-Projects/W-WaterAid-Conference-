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
    const [nationality, setNationality] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [updateDate, setUpdateDate] = useState("");
    const [isBeforeDate, setIsBeforeDate] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [tourDiscount, setTourDiscount] = useState(0);
    const [tourGrandTotal, setTourGrandTotal] = useState(0);
    const [grandTotalUpdate, setGrandTotalUpdate] = useState(0);
    const [student, setStudent] = useState(0);
    const [registrationPromoApplied, setRegistrationPromoApplied] = useState(false);
    const [tourPromoApplied, setTourPromoApplied] = useState(false);


    useEffect(() => {
        setGrandTotalUpdate(total + tourGrandTotal);
        console.log("Grand Total Updated:", total + tourGrandTotal);
    }, [total, tourGrandTotal]);



    useEffect(() => {
        const fetchSessionData = async () => {
            const token = localStorage.getItem("userToken");

            if (!token) {
                setError("You are not logged in.");
                return navigate("/Login"); // Redirect to login if no token
            }

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
                    setStudent(response.data.student);
                    setCountry(response.data.country);

                    // Compare updateDate with 01 Feb 2025
                    const fetchedUpdateDate = new Date(response.data.updateDate);
                    const comparisonDate = new Date("2025-02-01");

                    setIsBeforeDate(fetchedUpdateDate < comparisonDate);

                    // Extract and format tours
                    const tourValues = [
                        "Tour 1 | Faecal Sludge Treatment Plant at Sakhipur, Tangail, Bangladesh",
                        "Tour 2 | Public Toilet and Low Income Community Visit at Dhaka, Bangladesh",
                        "Tour 3 | A day with sanitation workers at Faridpur, Dhaka, Bangladesh",
                        "Tour 4 | Omni Processor at Cox’s Bazar, Chattogram, Bangladesh",
                        "Tour 5 | Faecal Sludge Treatment Plant at Saidpur, Nilphamari, Bangladesh",
                    ];

                    let tourPricing = [];
                    if (response.data.country === "Bangladesh") {
                        tourPricing = [9500, 0, 0, 47000, 36500];
                    } else {
                        tourPricing = [80, 0, 0, 400, 300];
                    }

                    const toursArray = response.data.tours ? response.data.tours.split(",") : [];
                    const activeTours = toursArray
                        .map((isTrue, index) => (isTrue.trim() === "true" ? { name: tourValues[index], price: tourPricing[index] } : null))
                        .filter(Boolean);
                    setTours(activeTours);

                    // Calculate the total price
                    const calculatedTotalPrice = activeTours.reduce((sum, tour) => sum + tour.price, 0);
                    setTotalPrice(calculatedTotalPrice);
                    setTourGrandTotal(calculatedTotalPrice);
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
        if(student === 'Student'){
            if (country === "Bangladesh") {
                setSubTotal(5000);
                setTotal(5000);
                setDiscount(0);
            } else {
                setSubTotal(50);  // Assuming foreign price is 100 USD
                setTotal(50);
                setDiscount(0);
            }
        }
        else{
            if (isBeforeDate) {
                if (country === "Bangladesh") {
                    setSubTotal(12000);
                    setTotal(12000);
                    setDiscount(0);
                } else {
                    setSubTotal(100);  // Assuming foreign price is 100 USD
                    setTotal(100);
                    setDiscount(0);
                }
            } else {
                if (country === "Bangladesh") {
                    setSubTotal(15000);
                    setTotal(15000);
                    setDiscount(0);
                } else {
                    setSubTotal(125);  // Assuming foreign Regular price is 125 USD
                    setTotal(125);
                    setDiscount(0);
                }
            }
        }
    }, [isBeforeDate, country]);

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
                    setRegistrationPromoApplied(true);
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
                    setTourPromoApplied(true);
                } else {
                    alert("Invalid promo code");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }

    function payNow (event) {
        event.preventDefault();
        const url = '/api/insert_invoice.php';
        let fData = new FormData();
        fData.append('tourPromo', tourPromo);
        fData.append('registrationPromo', registrationPromo);
        fData.append('tours', tours);
        fData.append('grandTotalUpdate', grandTotalUpdate);
        fData.append('nationality', nationality);
        fData.append('country', country);
        fData.append('isBeforeDate', isBeforeDate);
        fData.append('discount', discount);
        fData.append('tourDiscount', tourDiscount);
        fData.append('student', student);
        axios.post(url, fData)
            .then(response => {
                if (response.data.status === "Success") {
                    window.location.href = 'https://regtoiletconference.org/api/payment';
                } else {
                    alert("Something Went Wrong");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    };

    function submitInvoiceData (event) {
        event.preventDefault();
        const url = '/api/insert_invoice.php';
        let fData = new FormData();
        fData.append('tourPromo', tourPromo);
        fData.append('registrationPromo', registrationPromo);
        fData.append('tours', tours);
        fData.append('grandTotalUpdate', grandTotalUpdate);
        fData.append('nationality', nationality);
        fData.append('country', country);
        fData.append('isBeforeDate', isBeforeDate);
        fData.append('discount', discount);
        fData.append('tourDiscount', tourDiscount);
        fData.append('student', student);
        axios.post(url, fData)
            .then(response => {
                if (response.data.status === "Success") {
                    alert('Please download the invoice for future use');
                    window.location.href = 'https://regtoiletconference.org/user_invoice';
                } else {
                    alert("Something Went Wrong");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network error occurred');
            });
    }


    const formatBangladeshiNumber = (number) => {
        const formatter = new Intl.NumberFormat("bn-BD", {
            maximumFractionDigits: 2, // No decimals
        });

        // Format the number
        const formattedNumber = formatter.format(number);

        // Replace Bengali numerals with English numerals
        const bengaliToEnglishMap = {
            '০': '0',
            '১': '1',
            '২': '2',
            '৩': '3',
            '৪': '4',
            '৫': '5',
            '৬': '6',
            '৭': '7',
            '৮': '8',
            '৯': '9',
        };

        return formattedNumber.replace(/[০-৯]/g, (digit) => bengaliToEnglishMap[digit]);
    };

    return (
        <div>
            <Menu />
            <div className="container mt-5">
                <h4>Cart</h4>
                <h6 className="mt-5">Items</h6>
                <hr/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Serial #</th>
                        <th scope="col">Registration</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {student === 'Student' ? (
                        country === "Bangladesh" ? (
                            <tr>
                                <th scope="row">1</th>
                                <td>Student registration (Bangladeshi)</td>
                                <td>1</td>
                                <td>{formatBangladeshiNumber (subTotal)} BDT</td>
                                <td>{formatBangladeshiNumber (subTotal)} BDT</td>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="row">1</th>
                                <td>Student registration (Foreign)</td>
                                <td>1</td>
                                <td>{formatBangladeshiNumber (subTotal)} USD</td>
                                <td>{formatBangladeshiNumber (subTotal)} USD</td>
                            </tr>
                        )
                    ) : isBeforeDate ? (
                        country === "Bangladesh" ? (
                            <tr>
                                <th scope="row">1</th>
                                <td>Early bird registration (Bangladeshi)</td>
                                <td>1</td>
                                <td><del>15,000</del> {formatBangladeshiNumber (subTotal)} BDT</td>
                                <td>{formatBangladeshiNumber (subTotal)} BDT</td>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="row">1</th>
                                <td>Early bird registration (Foreign)</td>
                                <td>1</td>
                                <td><del>125</del> {formatBangladeshiNumber (subTotal)} USD</td>
                                <td>{formatBangladeshiNumber (subTotal)} USD</td>
                            </tr>
                        )
                    ) : (
                        country === "Bangladesh" ? (
                            <tr>
                                <th scope="row">1</th>
                                <td>Regular registration (Bangladeshi)</td>
                                <td>1</td>
                                <td>{formatBangladeshiNumber (subTotal)} BDT</td>
                                <td>{formatBangladeshiNumber (subTotal)} BDT</td>
                            </tr>
                        ) : (
                            <tr>
                                <th scope="row">1</th>
                                <td>Regular registration (Foreign)</td>
                                <td>1</td>
                                <td>{formatBangladeshiNumber (subTotal)} USD</td>
                                <td>{formatBangladeshiNumber (subTotal)} USD</td>
                            </tr>
                        )
                    )}
                    <tr>
                        <th colSpan={4}>Sub-Total</th>
                        <td><b>{formatBangladeshiNumber (subTotal)} {country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ) : (
                            <span>USD</span>
                        )}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Discount</th>
                        <td><b>{formatBangladeshiNumber (discount)} {country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <td><b>{formatBangladeshiNumber (total)} { country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
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
                                    disabled={registrationPromoApplied}
                                />
                                <button className="btn-primary mt-3" type="submit" disabled={registrationPromoApplied}>Apply</button>
                            </form>
                        </div>
                    </div>


                <h6 className="mt-5">Technical Tours</h6>
                <hr/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Serial #</th>
                        <th scope="col">Registration</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tours.map((tour, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{tour.name}</td>
                            <td>1</td>
                            <td>{formatBangladeshiNumber (tour.price)} { country === 'Bangladesh' && (
                                <span>BDT</span>
                            )}</td>
                            <td>{formatBangladeshiNumber (tour.price)} { country === 'Bangladesh' && (
                                <span>BDT</span>
                            )}</td>
                        </tr>
                    ))}
                    <tr>
                        <th colSpan={4}>Sub-Total</th>
                        <td><b>{formatBangladeshiNumber (totalPrice)} { country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Discount</th>
                        <td><b>{formatBangladeshiNumber (tourDiscount)} { country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Total</th>
                        <td><b>{formatBangladeshiNumber (tourGrandTotal)} { country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
                    </tr>
                    </tbody>
                </table>
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
                            disabled={tourPromoApplied}
                        />
                        <button className="btn-primary mt-3" type="submit" disabled={tourPromoApplied}>Apply</button>
                    </form>
                </div>

                <h6 className="mt-5">Grand Total</h6>
                <hr/>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th colSpan={4}>Grand Total</th>
                        <td style={{textAlign:'end'}}><b>{formatBangladeshiNumber (grandTotalUpdate)} { country === 'Bangladesh' ? (
                            <span>BDT</span>
                        ): (
                            <span>USD</span>
                            )}</b></td>
                    </tr>
                    </tbody>
                </table>
                <div className="row mt-3 mb-5 d-flex align-items-end justify-content-end">
                    <div className="col-2">
                        <button className="btn btn-primary" disabled={false} onClick={payNow}>
                            Pay Now
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" disabled={false} onClick={submitInvoiceData}>
                            Pay Later
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cart;
