import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { useAuth } from '../store/auth'
const Navbar = () => {

  const {isLoggedin}=useAuth();
  return (
    
    <>
      <header>
        <div className="main-nav">
        <div className="logo-brand">
                <NavLink to="/">
                    <h2>
                    <span>M</span>inhaz
                    <span>K</span>han
                    </h2>
                </NavLink>
            </div>
            <nav className='menu-link'>
                <ul className='menu-link-desktop'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {isLoggedin ? <li><NavLink to="/logout">Logout</NavLink></li>:
                    <>
                    <li><NavLink to="/registration">SignUp</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    </>
                    }

                    
                    

                    

                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
