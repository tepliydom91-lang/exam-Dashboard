import { useTasksStore } from "../../store/taskStore"

interface TasksCardProps {
    id: string
}

export const TasksCard = ({ id }: TasksCardProps) => {
    const task = useTasksStore((state) => state.tasks[id])
    return (
        <li>
            title:    {task.title}
            description:    {task.description}
        </li>
    )
}