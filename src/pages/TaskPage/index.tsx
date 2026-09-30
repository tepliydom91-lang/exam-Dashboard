import { useEffect } from "react"
import { TasksList } from "../../components/TasksList"
import { useTasksStore } from "../../store/taskStore"
import { CircularProgress } from "@mui/material"
import Snackbar from "@mui/material/Snackbar";
import { TaskColumnsList } from "../../components/TaskColumnsList";

export const TaskPage = () => {
    const { loading, error, getTasks } = useTasksStore(
        (state) => state
    )

    useEffect(() => {
        getTasks()
    }, [])

    if (loading) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>
            <TaskColumnsList />

            <Snackbar
                open={!!error}
                autoHideDuration={3000}
                message={error}
            />
        </div>
    )
}
// 1 
// 2 ложим в сторе 
// 3 достаем из стора список 
// 4 в компоненте таск лист перебераем массив ин и используем тасккард
// 5 в тасккард выводим все данные 