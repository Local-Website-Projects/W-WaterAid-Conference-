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
        </div>
    )
}

export default Home