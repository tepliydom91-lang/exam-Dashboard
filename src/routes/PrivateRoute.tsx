import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore"

export const PrivateRouter = () => {
    const user = useUserStore((state) => state.user)
    const isAuthenticated = !!user;
    console.log(user,66)
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
