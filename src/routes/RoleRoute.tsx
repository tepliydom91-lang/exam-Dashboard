import { Navigate, Outlet } from "react-router-dom";
import type { Role } from "../types";
import { useUserStore } from "../store/userStore";

interface RoleRouterProps {
    roles: Role[]
}

export const RoleRoute = ({ roles }: RoleRouterProps) => {
    
    const user = useUserStore((state) => state.user)

console.log(user,55)
    
    if (!user) {
        return <Navigate to='/login' replace/>
    }

    if (!roles.includes(user.role)) {
        return <Navigate to='/' replace/>
    }
    
    return <Outlet />
}