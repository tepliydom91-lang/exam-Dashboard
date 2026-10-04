import { create } from 'zustand'
import type { SignInDTO, User, Options } from '../types'
import mockUser from '../data/user.json'
const users = mockUser as User[];


interface UserStore {
    user: User | null
    loading: boolean
    error: string | null
    getUser: (data:SignInDTO) => Promise<User | undefined>
    clearUser: () => void
    getAllUsers: () => Promise<void>
    users:Options[]
}


export const useUserStore = create < UserStore > ((set) => ({
    user: null,
    loading: false,
    error: null,
    users: [],
    
    getUser: async (data:SignInDTO) => {
        set({
            loading: true,
            error: null,
        })

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const user = users.find(({ email }) => email === data.email);
            if (!user) {
                throw new Error('user not found')
            }
            if (user.password !== data.password) {
                throw new Error('Invalid credentials')
            }
            set({
                user:user,
            })
            return user
        } catch {
            set({
                error: 'Не удалось получить пользователя',
            })
        } finally {
            set({
                loading:false,
            })
        }
    },

    clearUser: () => {
        set({
            user: null,
        })
    },
    getAllUsers: async () => {
        set({
            loading: true,
            error:null
        })
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const userData = users.map(({ name, id }) => ({ text: name, id }))
            set({users:userData})
        } catch {
            set({
                error: 'не удалось получить пользователей'
          })
        } finally {
            set({loading:false})
        }
    }
}))