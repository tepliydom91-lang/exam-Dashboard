import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { VisibilityOff, Visibility } from "@mui/icons-material";

interface InputProps {
    label: string
    type: 'text' | 'password' | 'email'
    placeholder: string
    name: string

}

export const Input = ({ name, label, type, placeholder }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <label htmlFor={name}>{label}</label>
                    <TextField
                        {...field}
                        type={showPassword ? 'text' : type}
                        error={!!error}
                        helperText={
                            error ? error.message : ''
                        }
                        fullWidth
                        placeholder={placeholder}
                        slotProps={{
                            input: type === 'password' ? {
                                endAdornment:
                                    (<InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" edge="end" onClick={() => setShowPassword(prev => !prev)}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>)
                            } : undefined
                        }}
                    />
                </div>
            )}
        >

        </Controller>
    )
}