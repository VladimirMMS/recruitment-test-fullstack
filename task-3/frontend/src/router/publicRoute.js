import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PublicRoute({isUserLogin}) {
    let location = useLocation();
    return (

        <>
            {isUserLogin ? <Navigate to='' state={{ from: location }} replace /> : <Outlet />}

        </>


    )
}