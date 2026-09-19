const Roles = {
    teamLead: 'teamLead',
    member: 'member'
} as const;

type Role = typeof Roles[keyof typeof Roles];

export { Roles };
export type { Role };