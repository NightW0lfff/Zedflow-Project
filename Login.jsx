import React, { useState } from "react";
import img1 from "./Background-image.png";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import img2 from "./zedflow-logo.png";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function Image() {
        return (
            <div classname="bg">
                <img src={img1} alt="" />

            </div>
        )

    }


    return (
        <div className="auth-form-container">
            <img src={img2} alt="" />

            <h2>Welcome to Zedflow </h2>
            <form className="Login-form" onSubmit={handleSubmit}>
                <ul>
                    <MdEmail classname="emailIcon" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" /> </ul>
                <ul>
                    <AiFillLock classname="passIcon" />
                    <label for="password"> </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> </ul>
                <button type="submit">Sign In</button>
            </form>
        </div>


    )
}