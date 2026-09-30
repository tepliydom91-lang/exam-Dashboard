import { TasksList } from "../TasksList"
import { useTasksStore } from "../../store/taskStore"
import type { TaskStatus } from "../../types"

const columns : {key:TaskStatus, title:string}[] = [
    {
        key: 'todo',
        title: "todo"
    },
    {
        key: "in-progress",
        title: "in-progress"
    },
    {
        key: "review",
        title: "review"
    },
    {
        key: "done",
        title: "done"
    }
]

export const TaskColumnsList = () => {

    const { taskIdTodo,
        taskIdReview,
        taskIdDone,
        taskIdInProgress,
        tasks } = useTasksStore((state) => state)
    return (
        <div>
            <ul>
                {
                    columns.map(({ title, key }) => (

                        <li key={key}>
                            <h2>{title}</h2>
                            {title === "todo" && (<TasksList />)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}