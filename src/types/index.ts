type Role = 'member' | 'teamLead'

export interface User {
    id: number
    name:string
    email:string
    role: Role
    password:string
}

export type { Role };