import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset, sendPasswordResetEmail } from "../firebase";
import "./Reset.css";
function Reset() {
    const [Email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleReset = () => {
        sendPasswordReset(Email);
    };
    useEffect(() => {
        if (loading) return;
        // if (user) navigate("./Components");
    }, [user, loading]);
    return (
        <div className="reset">

            <div className="reset__container">
                <img
                    src="/zedflow-logo.png"
                    alt="Zedflow Logo"
                    className="login-logo"
                />
                <input
                    type="text"
                    className="reset__textBox"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    className="reset__btn"
                    onClick={handleReset}
                //onClick={() => sendPasswordResetEmail(Email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link style={{ color: "#1E90FF" }} to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Reset;