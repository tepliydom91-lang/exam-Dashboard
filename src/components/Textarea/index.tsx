
import { Controller, useFormContext } from "react-hook-form"

import {
    Wrapper,
    Label,
    StyledTextarea,
    ErrorText,
} from "./style"

interface TextareaProps {
    name: string
    placeholder: string
    label: string
}

export const Textarea = ({
    name,
    placeholder,
    label,
}: TextareaProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Wrapper>
                    <Label htmlFor={name}>
                        {label}
                    </Label>

                    <StyledTextarea
                        {...field}
                        id={name}
                        placeholder={placeholder}
                        minRows={3}
                        error={!!error}
                    />

                    {error && (
                        <ErrorText>
                            {error.message}
                        </ErrorText>
                    )}
                </Wrapper>
            )}
        />
    )
}