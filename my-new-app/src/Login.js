import React, { useRef, useState, useEffect } from "react";
import img1 from "./Background-image.png";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import img2 from "./zedflow-logo.png";

export const Login = () => {
    const userRef = useRef();
    const errRef = useRef('');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
        setEmail('');
        setPass('');
        setSuccess(true);
    }



    function Image() {
        return (
            <div classname="bg">
                <img src={img1} alt="" />

            </div>
        )

    }




    return (

        <>
            {success ? (
                <div>
                    <h1> You are successfully logged in!</h1> <br />
                    <p>
                        <a href="#"> Go to Homepage</a>

                    </p>

                </div>
            ) : (

                <div className="auth-form-container">
                    <img src={img2} alt="" />
                    <p ref={errRef} className={errMsg ? "errmsg" :
                        "offscreen"} aria-live="assertive" >{errMsg}</p>
                    <h2>Welcome to Zedflow </h2>
                    <form className="Login-form" onSubmit={handleSubmit}>
                        <ul>
                            <MdEmail classname="emailIcon" />
                            <label for="email"> </label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" ref={userRef} name="email" /> </ul>
                        <ul>
                            <AiFillLock classname="passIcon" />
                            <label for="password"> </label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" ref={userRef} name="password" /> </ul>
                        <button type="submit">Sign In</button>
                    </form>

                    <p>
                        Need an Account? <br />
                        <span classname="Signing">
                            {/*put router link here*/}
                            <a href="#"> Sign Up</a>
                        </span>
                    </p>

                </div >
            )}
        </>



    )
}