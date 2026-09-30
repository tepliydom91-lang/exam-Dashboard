import { create } from 'zustand'
import type { Task } from '../types'
import mockTasks from '../data/task.json'
const tasks = mockTasks as Task[];

interface TaskStore {
    tasks: Record<string, Task>
    taskIdTodo: string[],
    taskIdReview: string[],
    taskIdDone: string[],
    taskIdInProgress: string[],
    loading: boolean
    error: string | null
    getTasks: () => Promise<void>
    // clearUser: () => void
}


export const useTasksStore = create<TaskStore>((set) => ({
    tasks: {},
    taskIdTodo: [],
    taskIdReview: [],
    taskIdDone: [],
    taskIdInProgress:[],
    loading: false,
    error: null,

    getTasks: async () => {
        set({
            loading: true,
            error: null,
        })

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const taskIdTodo = tasks.filter(({status}) => status === 'todo').map(({id}) => id)
            const taskIdReview = tasks.filter(({ status }) => status === 'review').map(({ id }) => id)
            const taskIdDone = tasks.filter(({ status }) => status === 'done').map(({ id }) => id)
            const taskIdInProgress = tasks.filter(({ status }) => status === 'in-progress').map(({ id }) => id)
            
            const taskObject = tasks.reduce((acc: Record<string, Task>, curr) => {
                acc[curr.id] = curr
                return acc
            },{})
            set({
                taskIdTodo,
                taskIdReview,
                taskIdDone,
                taskIdInProgress,
                tasks:taskObject
            })
        } catch {
            set({
                error: 'Не удалось получить пользователя',
            })
        } finally {
            set({
                loading: false,
            })
        }
    }
}))

// {
//[1,2,3]
// }
//{
//1:{
//     "id": "1",
//         "title": "Create authentication flow",
//             "description": "Implement sign in and user authentication.",
//                 "assigneeId": "3",
//                     "assigneeName": "Alex",
//                         "priority": "high",
//                             "status": "in-progress",
//                                 "dueDate": "28.09.2026",
//                                     "createdAt": "20.09.2026",
//                                         "createdBy": "1",
//                                             "comments": [
//                                                 {
//                                                     "id": "1",
//                                                     "text": "Start with the login form.",
//                                                     "authorName": "Dima",
//                                                     "createdAt": "21.09.2026"
//                                                 },
//                                                 {
//                                                     "id": "14",
//                                                     "text": "Can you also handle the redirect after successful login?",
//                                                     "authorName": "Pasha",
//                                                     "createdAt": "22.09.2026"
//                                                 },
//                                                 {
//                                                     "id": "15",
//                                                     "text": "The validation looks good. Please test an invalid password too.",
//                                                     "authorName": "Alex",
//                                                     "createdAt": "22.09.2026"
//                                                 },
//                                                 {
//                                                     "id": "16",
//                                                     "text": "I will check the authentication flow after this.",
//                                                     "authorName": "Dima",
//                                                     "createdAt": "23.09.2026"
//                                                 }
//                                             ]
//}
//}