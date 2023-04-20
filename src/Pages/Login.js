import React, { useState } from "react";
import "./Login.css";
import { colors } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <div className="auth-form-container">
        {/* <img src={img2} alt="" /> */}

        <h2>Welcome to Zedflow </h2>
        <form className="Login-form" onSubmit={handleSubmit}>
          <ul>
            {/* <MdEmail classname="emailIcon" /> */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />{" "}
          </ul>
          <ul>
            {/* <AiFillLock classname="passIcon" /> */}
            <label for="password"> </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </ul>
          <button type="submit">
            <a href="/" style={{ color: "#000000" }}>
              Sign In
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
