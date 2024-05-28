import React, {  useState } from 'react'
import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const AdminUpdate = () => {
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:""
    });
    const navigate=useNavigate();
    const params=useParams();
    const {myToken}=useAuth();
    const getSingleUser=async()=>{
        try {
            const response=await fetch(`http://localhost:3002/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    "Authorization":myToken
                },
            }
        );
    
            const data=await response.json();
            console.log("Data",data);
            setData(data);
        
        } catch (error) {
            console.log(error)
        };
    }
    useEffect(()=>{
       getSingleUser(); 
    },[]);

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({
            ...data,
            [name]:value
        })
    };
    const handleSubmit=async(e)=>{
            e.preventDefault();
            try {
               const response=await fetch(
                `http://localhost:3002/api/admin/users/update/${params.id}`,
                {
                    method:"PATCH",
                    headers:{
                        "Content-Type": "application/json",
                        Authorization:myToken,
                    },
                    body:JSON.stringify(data),
                }
               );
               if(response.ok){
                alert("Updated Successfully");
                setData({
                    username:"",
                    email:"",
                    phone:""
                })
                
               }
               else{
                alert("Not Updated");
               }
               navigate("/admin/user")
            } catch (error) {
                console.log(error);
            }
    }

  return (
    <>
      <main>
        <div className="section-contact">

          <div className="contact-content container">
          <h1 className="main-heading mb-3">Update Information</h1>
          </div>
          <div className="container grid grid-two-column">
            <div className="contact-image">
            <img src="/images/about.png" alt="regImage" 
            width="400" 
            height="500"/>
            </div>
          <div className="section-form">
            
            <form action="" onSubmit={handleSubmit} >
              
            <div>
                <label htmlFor="username">UserName</label>
                <input type="username" 
                name="username"
                id="username"
                placeholder="Enter name"
                required
                autoComplete="off"
                value={data.username}
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
                value={data.email}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="phone" 
                name="phone"
                id="phone"
                placeholder="Enter phone"
                required
                autoComplete="off"
                value={data.phone}
                onChange={handleChange}
                />
              </div>
              
              
              <button type="submit" className="btn btn-submit">Update</button>
            </form>
              
            </div>
          </div>
          
        </div>
        
      </main>
    </>
  )
}

export default AdminUpdate
