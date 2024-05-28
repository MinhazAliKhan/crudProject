import {  createContext, useContext, useEffect, useState } from "react";
const uri="http://localhost:3002/api/user/user";

export const MyContex= createContext();


export const AuthProvider=({children})=>{

            const[token,setToken]=useState(localStorage.getItem("token"));
    const[user,setUser]=useState("");    

    
    const lstoken=(serverToken)=>{
       
        setToken(serverToken);
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedin=!!token;
    

    const logoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }
    const myToken=`Bearer ${token}`
    const userInfo=async(url)=>{
        try {
            const response= await fetch(url,{
              method:"GET",
              headers:{
                Authorization:myToken,
              },  
            });
            if(response.ok){
                const data=await response.json()
                // console.log("hello",data.msg);
                setUser(data.msg);
                
            }
            console.log("MyState",user)
            
        } catch (error) {
            console.log("error fetching")
        }
    }

    useEffect(() => {
        userInfo(uri);
    }, [isLoggedin]);


return <MyContex.Provider value={{myToken,isLoggedin,lstoken,user,logoutUser}}>
    {children}
</MyContex.Provider>
}

export const useAuth=()=>{
  return useContext(MyContex)
}