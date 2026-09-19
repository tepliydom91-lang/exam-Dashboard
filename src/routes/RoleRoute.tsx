import { Navigate, Outlet } from "react-router-dom";
import type { Role } from "../types";
import type { User } from "../types";

interface RoleRouterProps {
    roles: Role[]
}

export const RoleRoute = ({ roles }:RoleRouterProps) => {
    const user:User = {
        id: 1,
        name: "dmytro",
        email: '123@gmail.com',
        role: 'member'
    }
    
    if (!user) {
        return <Navigate to='/login' replace/>
    }

    if (!roles.includes(user.role)) {
        return <Navigate to='/' replace/>
    }
    
    return <Outlet />
}