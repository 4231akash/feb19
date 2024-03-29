import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./form.css";

const Login = () => {
  const [data, setdata] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [show, setShow] = useState(false);
 
  const validEmail = sessionStorage.getItem("Email");
  const validPassword = sessionStorage.getItem("password");

 
  function validation(event) {
    if (data.trim().length === 0) {
      event.preventDefault();
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (password.trim().length === 0) {
      event.preventDefault();
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if(validEmail === data && validPassword === password){
      event.preventDefault();
      sessionStorage.setItem("token", 4231)
      setShow(true);
    }
    
  }
 

  function handleSubmit(data) {
    data.preventDefault();
    return console.log(data);
  }
  const history = useHistory();

  return (
    <div className="login-form">
      { show ? 
        history.push("/dashboard")
       : 
        <div className="box">
          <form onSubmit={() => handleSubmit(data)} className="form">
            <h2 id="head">login</h2>
            <input
              type="text"
              value={data}
              className="input"
              placeholder="Email"
              onChange={(e) => setdata(e.target.value)}
            ></input>
            {nameErr && <small className="RED">please enter userId</small>}

            <input
              type="password"
              value={password}
              className="input"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {passwordErr && (
              <small className="RED">please enter password</small>
            )}

            <p className="RED">forget password?</p>
            <button type="submit" onClick={validation} className="log-in">
              Login
            </button>
            <p className="RED">
              Don't have an account?<a href="/signup">SingUp</a>
            </p>
          </form>

          <div className="RED">or</div>
          <div className="other">
            <button className="log-in">
              <i class="fa-brands fa-facebook-f"></i> Login with facebook
            </button>
            <button className="input">
              <i class="fa-brands fa-google"></i> Login with google
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
