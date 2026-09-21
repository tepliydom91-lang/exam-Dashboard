import { create } from 'zustand'
import type { User } from '../types'
import mockUser from '../data/user.json'

interface UserStore {
    user: User | null
    loading: boolean
    error: string | null
    getUser: (data:User) => Promise<void>
    clearUser: () => void
}

export const useUserStore = create < UserStore > ((set) => ({
    user: null,
    loading: false,
    error: null,

    getUser: async (data:User) => {
        set({
            loading: true,
            error: null,
        })

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const user = mockUser.find(({ email }) => email === data.email);
            if (!user) {
                throw new Error('user not found')
            }
            if (user.password !== data.password) {
                throw new Error('Invalid credentials')
            }
            set({
                user: data,
            })
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