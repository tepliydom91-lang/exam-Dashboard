import { z } from "zod";

export const signInSheme = z.object({
    email: z.email('invalid email adress'),
    password: z.string().min(6,'password must be more than 6 symbol'),
    
})