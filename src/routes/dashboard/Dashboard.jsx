import { Outlet, Link, NavLink } from "react-router-dom";
import "./Dashboard.scss";
import { TbSettings2 } from "react-icons/tb";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { TbUserSquareRounded } from "react-icons/tb";
import { useState } from "react";
import Login from '../login/Login';

const Dashboard = () => {
  const [asidebar, setAsidebar] = useState(true);

  function asideBar() {
    setAsidebar(!asidebar);
  }

  return localStorage.getItem("user-token")? (
    <div className="dashboard__wrapper">
      <aside>
        <div className="dashboard-title" style={asidebar ? { width: "30px" } : {padding:" 36px 28px"}}
        onClick={asideBar}>
          <li>
            <TbSettings2 />
          </li>
          <h1 style={asidebar ? { display: "none"} : {display: "block"}}>Dashboard</h1>
        </div >
        <div  className="menu-item" style={asidebar ? { display: "none"} : {display: "block"}}>
          <NavLink 
            className={({ isActive }) =>
              isActive ? "link link--active" : "link"
            }
            to="/dashboard/products" 
          >
            <li>
              <HiOutlineSquare3Stack3D />
            </li>
            Products
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link link--active" : "link"
            }
            to="/dashboard/customers"
          >
            <li>
              <TbUserSquareRounded />
            </li>
            Customers
          </NavLink>
        </div>
      </aside>

      <div className="dashboard__main">
        <Outlet />
      </div>
    </div>
  ) : <Login to="/login"/>
};

export default Dashboard;
