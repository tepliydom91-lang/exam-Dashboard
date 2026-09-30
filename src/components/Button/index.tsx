import { Button as ButtonComponent } from '@mui/material'
interface ButtonProps {
    label: string
    type: 'submit' | "reset" | 'button'
    onClick?: ()=> void
}
export const Button = ({label,type,onClick}:ButtonProps) => {
    return (
        <ButtonComponent
            onClick={onClick}
            type={type}
        >
        {label}
        </ButtonComponent>  
    )
}