import { useEffect } from "react";
import { useUserStore } from "../../store/userStore";
import { CreateTask } from "../../components/CreateTask"
import { useTasksStore } from "../../store/taskStore";
export const CreateTaskPage = () => {
    const { getAllUsers } = useUserStore((state) => state)
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>
            <CreateTask />
        </div>
    )
}