type Role = 'member' | 'teamLead'
type TaskPriority = 'low' | 'normal' | 'high'
export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done'

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

export interface CommentsTask {
    id: string
    text: string
    authorName: string
    createdAt:Date
}

export interface Task {
    id:string
    title: string
    description:string
    assigneeId: string
    assigneeName:string
    priority:TaskPriority
    status:TaskStatus
    dueDate: Date
    createdAt: Date
    createdBy:string
    comments:CommentsTask

}

export type { Role };