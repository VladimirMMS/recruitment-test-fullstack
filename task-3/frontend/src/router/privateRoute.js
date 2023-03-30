import { Navigate, Outlet } from 'react-router'


export default function PrivateRoute({isUserLogin}) {
    return (
        <>
            {isUserLogin ? (<Outlet />) : <Navigate to='/login' />}

        </>

    )
}