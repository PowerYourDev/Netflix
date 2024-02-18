import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
   
    const userData= useSelector((state)=>state.userSlice)

    return userData ? <Outlet /> : <Navigate to="/" replace={true} />;

  
}

export default ProtectedRoutes