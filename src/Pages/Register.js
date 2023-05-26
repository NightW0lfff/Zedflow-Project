import React, { useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../firebase";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register(props) {

    const [Email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [EmailFocus, setEmailFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPass, setMatchPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);



    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(Email));
    }, [Email])

    useEffect(() => {
        setValidPass(PASS_REGEX.test(pass));
        setValidMatch(pass === matchPass);
    }, [pass, matchPass])

    useEffect(() => {
        setErrMsg('');
    }, [Email, pass, matchPass])


    const register = () => {
        if (!Email) alert("Please enter email");
        registerWithEmailAndPassword(Email, pass);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate.replace("/Components");
    }, [user, loading]);



    return (
        <>
            {success ? (
                <div classname="rcontainer">
                    <h1> Success!</h1>
                    <p>
                        <a href="./Login">Sign In</a>
                    </p>
                </div>
            ) : (
                <div className="rcontainer">
                    <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <p> Please fill in this form to create an account.</p>
                    <form className="register-form">
                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !Email ? "hide" : "invalid"} />
                        </label>
                        <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />

                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPass ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPass || !pass ? "hide" : "invalid"} />
                        </label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" aria-invalid={validPass ? "false" : "true"}
                            aria-describedby="passnote"
                            onFocus={() => setPassFocus(true)}
                            onBlur={() => setPassFocus(false)} />
                        <p id="passnote" className={passFocus && !validPass ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pass">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPass ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPass ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            id="confirm_pass"
                            onChange={(e) => setMatchPass(e.target.value)}
                            value={matchPass}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        <p>By creating an account you agree to our <a style={{ color: "#1E90FF" }} href="#">Terms & Privacy</a>.</p>

                        <button type="submit" className="registerbtn" onClick={register}> Sign Up</button>
                        <button
                            className="register__google"
                            onClick={signInWithGoogle}>
                            Register with Google
                        </button>
                    </form>
                    <div>
                        <p> Already have an account?
                            <span>
                                <Link style={{ color: "#1E90FF" }} to={"/Login"}> Sign In </Link>

                            </span>
                        </p>
                    </div>

                </div >
            )
            }
        </>


    )
}

export default Register;