import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Components");
  }, [user, loading]);



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

          <p className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive" >{errMsg}</p>
          <h2 style={{ color: "Black" }}>Welcome to Zedflow </h2>
          <form className="Login-form">
            <ul>
              <li>

                <label for="email">  <EmailIcon classname="emailIcon" /></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
              </li>
              <li>
                <LockIcon classname="passIcon" />
                <label for="password"> </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
              </li>
            </ul>
            <button type="submit" onClick={() => signInWithEmailAndPassword(email, pass)}>
              <a href="/" style={{ color: "#FFFFFF" }}> Sign In </a> </button>
            <button className="login_google" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <div>
              <Link style={{ color: "#1E90FF" }} to={"/reset"}>Forgot Password</Link>
            </div>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
          </form>

          <p style={{ color: "#000000" }} >
            Need an Account? <br />
            <span className="Signing">
              <Link style={{ color: "#1E90FF" }} to={"/register"}>Sign Up </Link>


            </span >


          </p >

        </div >
      )}
    </>



  )

}
export default Login;

