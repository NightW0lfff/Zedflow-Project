import React, { useRef, useState, useEffect, useContext } from "react";
import "./Login.css";
import AuthContext from "./context/AuthProvider";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
//import { AiFillLock } from "react-icons/ai";


import axios from './api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
  //const { setAuth } = useContext(AuthContext);
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

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, pass }),
        {
          headers: { 'Content-type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      /*const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pass, roles, accessToken });*/
      setEmail('');
      setPass('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }

  }



  function Image() {
    return (
      <div classname="bg">
        <img
          src="/zedflow-logo.png"> </img>


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

          <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive" >{errMsg}</p>
          <h2 style={{ color: "Black" }}>Welcome to Zedflow </h2>
          <form className="Login-form" onSubmit={handleSubmit}>
            <ul>
              <EmailIcon classname="emailIcon" />
              <label for="email"> </label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" ref={userRef} name="email" /> </ul>
            <ul>
              <LockIcon classname="passIcon" />
              <label for="password"> </label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" ref={userRef} name="password" /> </ul>
            <button type="submit">
              <a href="/" style={{ color: "#FFFFFF" }}> Sign In </a> </button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
          </form>

          <p style={{ color: "#000000" }} >
            Need an Account? <br />
            <span classname="Signing">
              <Link style={{ color: "#1E90FF" }} to={"/register"}>Sign Up </Link>

              {/*put router link here*/}
              {/* <a href="./Register"> Sign Up</a> */}
            </span >


          </p >

        </div >
      )}
    </>



  )

}
export default Login;
