type Role = 'member' | 'teamLead'
export const TaskPriority = {
    low: 'low',
    medium: 'medium',
    high: 'high',
} as const;

export type TaskPriority =
    (typeof TaskPriority)[keyof typeof TaskPriority];

export const TaskStatus = {
    todo: 'todo',
    inProgress: 'inProgress',
    done: 'done',
    review:'review'
} as const;

export type TaskStatus =
    (typeof TaskStatus)[keyof typeof TaskStatus];

export interface Options {
    id: string
    text: string
    }

export interface User {
    id: string
    name:string
    email:string
    role: Role
    password:string
}

export interface SignInDTO {
    email: string
    password:string
}

export interface CommentForm {
    text: string
    authorName: string
}

export interface CommentDTO {
    text: string
    authorName: string
}

export interface CommentsTask extends CommentDTO {
    id: string
    createdAt: string
}

export interface Task {
    id:string
    title: string
    description:string
    assigneeId: string
    assigneeName:string
    priority:TaskPriority
    status:TaskStatus
    dueDate: string
    createdAt: string
    createdBy:string
    comments:CommentsTask[]

}

export interface TaskDTO {
    title: string
    description: string
    assigneeId: string
    assigneeName: string
    priority: TaskPriority
    status: TaskStatus
    dueDate: string
    createdBy: string
}

export interface TaskForm {
    title: string
    description: string
    assigneeName: string
    priority: TaskPriority
    status: TaskStatus
    dueDate: string
}

export type { Role };