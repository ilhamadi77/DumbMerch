import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


function Private() {
    const dataLogin = JSON.parse(localStorage.getItem('dataAdmin'))
    console.log('ini adalah role :', dataLogin.role);

    const checkAuth = () => {
        if (dataLogin.role === "admin") {
            return true
        }
        return false
    }
    return (
        checkAuth() ? <Outlet /> : <Navigate to='/auth' />

    )
}



export default Private
