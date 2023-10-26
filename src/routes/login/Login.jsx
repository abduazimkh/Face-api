import './Login.css'
import { useEffect, useRef, useState } from "react";
import signUp from "../../assets/images/signup.svg";
import { apiInstance } from "../../api";
import axios from "axios";
import { useNavigate, Navigate } from 'react-router-dom';
import btnIcon from '../../assets/images/square.gif'



const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  async function userRegister(e) {
    e.preventDefault();
    try {
      const response = await apiInstance.post(`/auth/login`, {
        email: userEmail,
        password: userPassword,
      });
      if(response.data.access_token){
        localStorage.setItem("user-token", response.data.access_token)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="login">
      <div>
        <img src={signUp} alt="" />
      </div>
      <form onSubmit={userRegister} id="login-form">
        <h2>Log In</h2>
        <input
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          type="password"
        />

        <button id="btn" type="submit">
          <img src={btnIcon} alt="" />
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login