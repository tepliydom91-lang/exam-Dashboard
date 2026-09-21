import { useMemo, useState, type ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import { ThemeContext } from './ThemeContext'
import { getTheme } from '../theme/theme'

interface ThemeContextProviderProps {
    children: ReactNode
}

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const theme = useMemo(() => getTheme(mode), [mode])

    const value = useMemo(
        () => ({
            mode,
            toggleTheme,
        }),
        [mode],
    )

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}