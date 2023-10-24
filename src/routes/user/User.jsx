import React, { useEffect, useState } from 'react'
import { apiInstance } from '../../api';
import axios from "axios";
import "./User.css"
import { Link } from 'react-router-dom'

const User = () => {
    const ACCESS_TOKEN = localStorage.getItem("user-token");
    const [user, setUser] = useState("");
    const [acoount, setAccount] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        async function loadData(){
          try{
            const response = await apiInstance(`/auth/profile`,{
                headers: {
                    "Authorization": `Bearer ${ACCESS_TOKEN}`,
                }
            })
            // console.log(response.data);
            setUser(response.data)
          }
          catch(error){
            console.log(error);
          }
        }
        loadData();
      }, [])

      async function userRender(e) {
        e.preventDefault();
        try {
          const response = await apiInstance.put(`/users/${user.id}`, {
            email: userEmail,
            name: userName,
          })
        //   setAccount(response.data)
        if(response.status === 200){
            loadData();
        }
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div className='user__account'>
        <div className="img">
            <img src={user.avatar} alt={user.name + "'s profile picture"} />
        </div>
        <div className="account__item">
            <strong>user id: {user.id}</strong>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
            <a href={"mailto:" + user.email}>{user.email}</a>

            <Link to="/">
                <button>
                    Back to home page
                </button>
            </Link>
        </div>

        <div>
            <h2 className='update-user'>Updata User</h2>
            <form onSubmit={userRender} id='user-form'>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='Name' />
                <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} type="text" placeholder='Email' />
            
                <button type="submit">submit</button>
            </form>
        </div>
    </div>
  )
}

export default User