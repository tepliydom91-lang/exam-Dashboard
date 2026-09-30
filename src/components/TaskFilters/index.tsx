import type { TaskPriority } from "../../types"
import {
    Filters,
    PrioritySelect,
    SearchInput,
} from "./style"

interface TaskFiltersProps {
    search: string
    priority: TaskPriority | "all"
    onSearchChange: (value: string) => void
    onPriorityChange: (value: TaskPriority | "all") => void
}

export const TaskFilters = ({
    search,
    priority,
    onSearchChange,
    onPriorityChange,
}: TaskFiltersProps) => {
    return (
        <Filters>
            <SearchInput
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <PrioritySelect
                value={priority}
                onChange={(e) =>
                    onPriorityChange(
                        e.target.value as TaskPriority | "all"
                    )
                }
            >
                <option value="all">all</option>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
            </PrioritySelect>
        </Filters>
    )
}