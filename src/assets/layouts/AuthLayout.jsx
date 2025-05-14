import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='center-wrapper'>
            <h1>Auth Page</h1>
            <Outlet />
        </div>
    )
}

export default AuthLayout