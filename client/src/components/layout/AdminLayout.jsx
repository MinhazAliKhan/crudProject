import React from 'react'
import "./admin.css"
import { NavLink, Outlet } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaServicestack } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const AdminLayout = () => {
  return (
    <>
      <header>
      <div className="containermenu">
          <nav className='admin-menu'>
            <ul className="admin-menu-link">
              <li><NavLink to="/admin/user" ><FaUsers />User</NavLink></li>
              <li><NavLink to="/admin/contact" ><RiContactsBook2Fill />Contact</NavLink></li>
              <li><NavLink to="/admin/services" ><FaServicestack />Services</NavLink></li>
              <li><NavLink to="/" ><FaHome />Home</NavLink></li>
            
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default AdminLayout
