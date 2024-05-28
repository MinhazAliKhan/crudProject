import React, { useState } from 'react'
import { useAuth } from '../store/auth';
const uri="http://localhost:3002/api/user/contact";

const Contact = () => {
  const[contact,setContact]=useState({
    username:"",
    email:"",
    message:""
  });
  const [userData,setUserData]=useState(true);
  
  const {user}=useAuth();
console.log(user);
  if(userData&&user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })

    setUserData(false);
  }
  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setContact({
      ...contact,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(contact);
    try {
      const response=await fetch(uri,{
        method:"POST",
        headers:{
          "Content-Type":"Application/json",
        },
        body:JSON.stringify(contact)
      }
      )
      console.log("Contact Form",response)
      if (response.ok){
       setContact({username:"",email:"",message:""})
       alert("Message send Successful")
       
      }
      
    } catch (error) {
     console.log(error)
    }

  }


  return (
    <>
      <main>
        <div className="section-contact">

          <div className="contact-content container">
          <h1 className="main-heading mb-3">Contact Me</h1>
          </div>
          <div className="container grid grid-two-column">
            <div className="contact-image">
            <img src="./images/home.png" alt="regImage" 
            width="400" 
            height="500"/>
            </div>
          <div className="section-form">
            
            <form action="" onSubmit={handleSubmit}>
              
            <div>
                <label htmlFor="username">UserName</label>
                <input type="username" 
                name="username"
                id="username"
                placeholder="Enter name"
                required
                autoComplete="off"
                value={contact.username}
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
                value={contact.email}
                onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea name="message" 
                id="message" cols="30" 
                rows="6"
                placeholder='Enter your message'
                value={contact.message}
                onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-submit">Submit</button>
            </form>
              
            </div>
          </div>
          
        </div>
        <section className="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.1834963160723!2d-95.26536681040798!3d38.94263617111218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf68d0790d5885%3A0xc95eef4d6fd52628!2s2333%20W%2023rd%20St%2C%20Lawrence%2C%20KS%2066046!5e0!3m2!1sen!2sus!4v1715927935189!5m2!1sen!2sus" 
        width="100%" height="450"  
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </main>
    </>
  )
}

export default Contact
