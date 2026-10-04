import { z } from "zod";

export const commentSheme = z.object({
    text: z.string().min(6, 'malo teksta'),
    authorName: z.string()
})