

import { useState } from "react"
import type { Task, TaskPriority } from "../../types"
import { TaskCard } from "../TasksCard"
import { TaskFilters } from "../TaskFilters"
import { StyledList } from "./style"

interface TasksListProps {
    tasks: Task[]
}

export const TasksList = ({ tasks }: TasksListProps) => {
    const [search, setSearch] = useState("")
    const [priority, setPriority] =
        useState<TaskPriority | "all">("all")


    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchesPriority =
            priority === "all" || task.priority === priority

        return matchesSearch && matchesPriority
    })
    
        
    return (
        <>
            <TaskFilters
                search={search}
                priority={priority}
                onSearchChange={setSearch}
                onPriorityChange={setPriority}
            />

            <StyledList>
                {filteredTasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                ))}
            </StyledList>
        </>
    )
}