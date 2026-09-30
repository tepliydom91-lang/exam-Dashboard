import { TasksList } from "../TasksList"
import { useTasksStore } from "../../store/taskStore"
import type { TaskStatus } from "../../types"
import { Columns, Board, Column, ColumnTitle } from "./style"

const columns: { key: TaskStatus, title: string }[] = [
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

    const {tasks,
        taskIdTodo,
        taskIdReview,
        taskIdDone,
        taskIdInProgress,
    } = useTasksStore((state) => state)



    const tasksId: Record<TaskStatus, string[]> = {
        'todo': taskIdTodo,
        "in-progress": taskIdInProgress,
        "review": taskIdReview,
        "done": taskIdDone
        }




    return (
        <Board>
            <Columns>
                {columns.map(({ title, key }) => {
                    const ids = tasksId[key]

                    const columnTasks = ids.map(
                        (id) => tasks[id]
                    )

                    return (
                        <Column key={key}>
                            <ColumnTitle>
                                {title}
                            </ColumnTitle>

                            <TasksList tasks={columnTasks} />
                        </Column>
                    )
                })}
            </Columns>
        </Board>

        // <div>
        //     <ul>
        //         {columns.map(({ title, key }) => {

        //             const ids = tasksId[key]
        //             console.log(ids)

        //             const columnTasks = ids.map(
                    
        //                 (id) => tasks[id]

        //             )

        //             return (
        //                 <li key={key}>
        //                     <h2>{title}</h2>

        //                     <TasksList tasks={columnTasks} />
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // </div>
        )
}