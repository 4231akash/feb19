import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import App1 from "../../../App1";
// import Login from './Login';

const schema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  Email: yup
    .string()
    .email("please enter valid email")
    .required("email is required"),
  createPassword: yup
    .string()
    .required()
    .min(4, "minimum 4 characters required")
    .max(10, "maximum 10 characters only"),
  confirmPassword: yup.string().oneOf([yup.ref("createPassword"), null]),
});

const SignUp = () => {
  // const history = useHistory();
 
  const [form, setFrom] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const valid1= sessionStorage.getItem("Email");
  const valid2= sessionStorage.getItem("password");
   const valid3= sessionStorage.getItem("firstName");
    const valid4= sessionStorage.getItem("lastName");
  

  if ( isValid && valid1 && valid2 && valid3 && valid4 && !form) {
    return <Redirect to="/dashboard" />;
  }
 

  return (
    <div className="login">
      <div className="box1">
        {<form
          className="form1"
         
          onSubmit={handleSubmit((data)=>{
            sessionStorage.setItem("firstName", data.firstName);
            sessionStorage.setItem("lastName", data.lastName);
            sessionStorage.setItem("Email", data.Email);
            sessionStorage.setItem("password", data.confirmPassword);
            sessionStorage.setItem("token", 4231)
          })}>
          <h2 className="RED">Sign Up</h2>
          <input
            {...register("firstName")}
            className="input"
            placeholder="first name"
          ></input>
          <p className="message">{errors.firstName?.message}</p>
          <input
            {...register("lastName")}
            className="input"
            placeholder="last name"
          ></input>
          <p className="message">{errors.lastName?.message}</p>
          <input
            {...register("Email")}
            className="input"
            placeholder="Email"
          ></input>
          <p className="message">{errors.Email?.message}</p>
          <input
            {...register("createPassword")}
            className="input"
            placeholder="create password"
          ></input>
          <p className="message">{errors.createPassword?.message}</p>
          <input
            {...register("confirmPassword")}
            className="input"
            placeholder="confirm password"
          ></input>
          <p className="message">{errors.confirmPassword?.message}</p>
          <button
            type="submit"
            id="submit"
            disabled={isDirty && !isValid}
            onClick={() => setFrom(false)}
            className="log-in"
          >
            Login
          </button>
        </form>}
        <p className="RED">forgot password?</p>
        <p className="RED">
          Go to login?click this <a href="/login">LogIn</a>
        </p>
        {/* <div className='RED'>or</div>
            <div className="other">
            <button className='log-in' ><i class="fa-brands fa-facebook-f"></i> Login with facebook</button>
                <button className='input'><i class="fa-brands fa-google"></i> Login with google</button>
            </div> */}
      </div>
    </div>
  );
};

export default SignUp;
