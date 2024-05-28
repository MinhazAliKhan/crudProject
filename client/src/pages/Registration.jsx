import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../store/auth';

const uri= "http://localhost:3002/api/user/register"
const Registration = () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    password:"",
    address:"",
    phone:""
  })

  const {lstoken}=useAuth();

  const navigate=useNavigate();

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(user);
      try {
        const response=await fetch(uri,{
          method:"POST",
          headers:{
            "Content-Type":"Application/json",
          },
          body:JSON.stringify(user),
        });

        console.log(response);
        if(response.ok){
          const res_data=await response.json();
          console.log(res_data);
          // localStorage.setItem("token",res_data.token)
          lstoken(res_data.token);
          setUser({
            username:"",
            email:"",
            password:"",
            address:"",
            phone:""
          })
          alert("Registration Successfull");
          navigate("/login")
        }
        else{
          alert("Registration not successful")
        }
      } catch (error) {
        console.log("register",error);
      }
      
  }
 
  return (
    <>
      <main>
        <div className="section-registration">
        <div className="contact-content container">
          <h1 className="main-heading mb-3">Registration Form</h1>
          </div>
          <div className="container grid grid-two-column">
            <div className="registration-image">
            <img src="./images/register.png" alt="regImage" 
            width="400" 
            height="500"/>
            </div>
          <div className="registration-form">
            
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">UserName</label>
                <input type="text" 
                name="username"
                id="username"
                placeholder="Enter name"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                name="email"
                id="email"
                placeholder="Enter Email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                name="password"
                id="password"
                placeholder="Enter password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input type="text" 
                name="address"
                id="address"
                placeholder="Enter address"
                required
                autoComplete="off"
                value={user.address}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" 
                name="phone"
                id="phone"
                placeholder="Enter Phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-submit">SignUp</button>
            </form>
    
          </div>    
          </div>
        </div>
      </main>
    </>
  )
}

export default Registration
