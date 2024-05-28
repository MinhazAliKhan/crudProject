import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
const uri="http://localhost:3002/api/user/login";

const Login = () => {
  const[user,setUser]=useState({
    email:"",
    password:""
  });

  const {lstoken}=useAuth();

  const navigate=useNavigate();

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
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
       body:JSON.stringify(user)
     }
     )
     if (response.ok){

      const res_data=await response.json();
      console.log(res_data);
      lstoken(res_data.token);    
      setUser({email:"",password:""})
      alert("Login Successful")
      navigate("/")
     }
     else{
      alert("Invalid Credential");
      setUser({email:"",password:""})
     }
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <>
      <main>
        <div className="section-login">
        <div className="contact-content container">
          <h1 className="main-heading mb-3">Login Page</h1>
          </div>
          <div className="container grid grid-two-column">
            <div className="login-image">
            <img src="./images/home.png" alt="regImage" 
            width="400" 
            height="500"/>
            </div>
          <div className="login-form">
            
            <form action="" onSubmit={handleSubmit}>
              
              
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
              
              <button type="submit" className="btn btn-submit">SignIn</button>
            </form>
    
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export default Login
