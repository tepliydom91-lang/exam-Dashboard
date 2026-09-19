import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = () => {
    const isAuthenticated = true;
    
    if (!isAuthenticated) {
        return (
            <Navigate to='/login' replace/>
        )
    }

    return (
        <>
        <Outlet />
        </>
    )
}
