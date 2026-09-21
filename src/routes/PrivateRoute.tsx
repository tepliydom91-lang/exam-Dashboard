import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore"

export const PrivateRouter = () => {
    const user = useUserStore((state) => state.user)
    const isAuthenticated = !!user;

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
