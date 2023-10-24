import { Outlet, Link, NavLink } from 'react-router-dom'
import './Dashboard.scss'
import { TbSettings2 } from 'react-icons/tb'
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2'
import { TbUserSquareRounded } from 'react-icons/tb';

const Dashboard = () => {
  return (
    <div className='dashboard__wrapper'>
      <aside>
        <div  className="dashboard-title">
          <li>
            <TbSettings2/>
          </li>
          <h1>Dashboard</h1>
        </div>
        <div className='menu-item'>
              
          <NavLink className={({isActive}) => isActive ? 'link link--active':'link'} to="/dashboard/products">
          <li><HiOutlineSquare3Stack3D/></li>
           Products</NavLink>
            
          <NavLink className={({isActive}) => isActive ? 'link link--active':'link'} to="/dashboard/customers">
          <li><TbUserSquareRounded/></li>
          Customers</NavLink>
        </div>
      </aside>
      

      <div className="dashboard__main">
        <Outlet/>
      </div>

    </div>
  )
}

export default Dashboard