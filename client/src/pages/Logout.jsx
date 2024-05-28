import React from 'react';
import { useEffect } from 'react';

import { useAuth } from '../store/auth';
import {Navigate} from "react-router-dom"

const Logout = () => {

  const {logoutUser}=useAuth();

  useEffect(() => {
    logoutUser();
    }, []);
  return (
    
     <Navigate to="/login" />
    
  )
}

export default Logout
