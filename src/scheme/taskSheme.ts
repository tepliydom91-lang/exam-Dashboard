import { z } from 'zod';
import { TaskPriority } from '../types';

export const taskSheme = z.object({
    title: z.string(),
    description: z.string(),
    assigneeName: z.string(),

    priority: z.enum([
        TaskPriority.low,
        TaskPriority.medium,
        TaskPriority.high,
    ]),

    status: z.enum([
        'todo',
        'inProgress',
        'done',
        'review'
    ]),

    dueDate: z.string(),
});