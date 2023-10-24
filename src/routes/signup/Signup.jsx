import { useEffect, useRef, useState } from "react";
import signUp from "../../assets/images/signup.svg";
import { apiInstance } from "../../api";
import "./Signup.css";
import axios from "axios";
import { useNavigate, Navigate } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  async function userRegister(e) {
    e.preventDefault();
    try {
      const response = await apiInstance.post(`/users/`, {
        name: userName,
        email: userEmail,
        password: userPassword,
        avatar: userAvatar,
      });
      if(response.status === 201){
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup">
      <div>
        <img src={signUp} alt="" />
      </div>
      <form onSubmit={userRegister} id="signup-form">
        <h2>Sign Up</h2>
        <input
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
        />
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
        <input
          placeholder="Avatar Img"
          onChange={(e) => setUserAvatar(e.target.value)}
          value={userAvatar}
          type="text"
        />

        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
