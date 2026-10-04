import {
    MenuItem,
    Select,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { Options, TaskDTO } from '../../types';
interface SelectProps {
    name: 'priority' | 'status' | 'assigneeName'
    label: string
    options:Options[]
}
 

export const CustomSelect = ({ name, options, label }:SelectProps) => {
    const { control } = useFormContext<TaskDTO>();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select
                    {...field}
                    labelId={label}
                    label={label}
                    displayEmpty
                >
                    {(name === 'assigneeName') && (
                        <MenuItem value="" disabled>
                            Choose name
                        </MenuItem>
                    )}

                    {options.map(item => (
                        <MenuItem key= {item.id} value={item.text}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />

    );
};