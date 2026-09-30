import { create } from 'zustand'
import type { SignInDTO, User } from '../types'
import mockUser from '../data/user.json'
const users = mockUser as User[];


interface UserStore {
    user: User | null
    loading: boolean
    error: string | null
    getUser: (data:SignInDTO) => Promise<User | undefined>
    clearUser: () => void
}


export const useUserStore = create < UserStore > ((set) => ({
    user: null,
    loading: false,
    error: null,

    getUser: async (data:SignInDTO) => {
        set({
            loading: true,
            error: null,
        })

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const user = users.find(({ email }) => email === data.email);
            console.log(user)
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
}))