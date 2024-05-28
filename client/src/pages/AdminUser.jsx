import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../store/auth'
const uri=("http://localhost:3002/api/admin/users")

const AdminUser = () => {
  const [users,setUser]=useState([])
const {myToken}=useAuth();
const getAllUser=async(url)=>{
  try {
    const response=await fetch(url,{
      method:"GET",
      headers:{
        Authorization:myToken,
      }
    });
    const data=await response.json();
    console.log(data);
    setUser(data)
  } catch (error) {
    
  }
}
const deleteuser=async(id)=>{

  try {
    const response=await fetch(`http://localhost:3002/api/admin/users/delete/${id}`,{
    method:"DELETE",
    headers:{
      Authorization:myToken,
    }
  });
  const data=await response.json();
    console.log(data);
    if(response.ok){
      getAllUser(uri);
    }
  } catch (error) {
    console.log(error)
  }
};
  
  



  useEffect(()=>{
    getAllUser(uri)
  },[])
  return (
    <section className="admin-user-section">
      <div className="container">
        <h1>Admin User Data</h1>
      </div>
      <div className="container admin-user">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((curUser,index)=>{
        return  <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>{curUser.address}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                  </td>
                  <td><button onClick={()=>{deleteuser(curUser._id)}}>Delete</button></td>
                  
              </tr>
      })}
          </tbody>
        </table>
      
    </div>
    </section>
  )
}

export default AdminUser
