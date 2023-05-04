import React, { useRef, useState, useEffect, useContext } from "react";
import "./Login.css"
import AuthContext from "./context/AuthProvider";

import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";


import axios from './api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
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
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pass, roles, accessToken });
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
            <button type="submit">
              <a href="/" style={{ color: "#000000" }}> Sign In </a> </button>
          </form>

          <p>
            Need an Account? <br />
            <span classname="Signing">
              {/*put router link here*/}
              <a href="#"> Sign Up</a>
            </span >
          </p >

        </div >
      )}
    </>



  )

}
export default Login;

