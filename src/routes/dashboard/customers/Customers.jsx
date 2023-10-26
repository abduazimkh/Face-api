import { useState } from 'react';
import './Customers.scss';
import { useEffect } from 'react';
import { apiInstance } from '../../../api';

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [customers, setCustomers] = useState([]);
  // const [customer, setCustomer] = useState([]);
  const token = localStorage.getItem("user-token").split(".")[1]
  const iduser = JSON.parse(atob(token)).sub;

  useEffect(() => {
    async function renderUsers(){
      try{
        const response = await apiInstance("/users")
        // console.log(response.data);
        setUsers(response.data)
      }
      catch(error){
        console.log(error);
      }
    }

    renderUsers()
  }, [customers])

  useEffect(() => {
    async function loadUser(){
      try{
        const response = await apiInstance(`/users/${iduser}`);
        setUser(response.data.name)
      }
      catch(error){
        console.log(error);
      }
    }

    loadUser();
  }, [])


  useEffect(() => {
    async function renderSingleUser(){
      try{
        const response = await apiInstance(`/users/${customers}`);
        // console.log(response.data);
        setUsers(response.data)
      }
      catch(error){
        console.log(error);
      }
    }

    renderSingleUser();
  }, [users])


  return (
    <div className='customers__wrapper'>

      <div className='top-list'>
        <h2>Hello {user} 👋,</h2>

        <input onChange={(e) => setCustomers(e.target.value)} value={customers} type="text" placeholder='Search'/>
      </div>

      <div className="cutsomers">
        {
          users.map(user => {
            return (
              <div key={user.id} className="customers-item">
                <img src={user.avatar} alt={user.role} />
                <p>{user.id}</p>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
                <a href={`https://mail.google.com/${user.email}`}>{user.email}</a>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            )
          })
          
        }
      </div>
    </div>
  )
}

export default Customers