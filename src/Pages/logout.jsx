import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send a logout request to the backend
            const response = await fetch("https://conference.frogbid.com/api/user_logout.php", {
                method: "POST", // You can use GET if POST is not required
                credentials: "include", // Send cookies to maintain the session
            });

            if (response.ok) {
                // Backend successfully destroyed the session
                console.log("Logout successful");

                // Remove the token from localStorage (if stored)
                localStorage.removeItem("userToken");

                alert('Logout Successful!');
                // Redirect to the login page
                navigate("/Login");
            } else {
                // Handle backend errors
                const error = await response.json();
                console.error("Logout failed:", error.message);
                alert(error.message || "Failed to log out. Please try again.");
            }
        } catch (err) {
            console.error("An error occurred during logout:", err);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>

        </div>
    );
}

export default Logout;
