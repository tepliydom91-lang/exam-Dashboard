import { Navigate, Outlet } from "react-router-dom";

interface RoleRouterProps {
    roles
}

export const RoleRoute = ({ roles }) => {
    const user = { role: 'admin' }
    
    if (!user) {
        return <Navigate to='/login' replace/>
    }

    if (!roles.includes(user.role)) {
        return <Navigate to='/' replace/>
    }
    
    return <Outlet />
}