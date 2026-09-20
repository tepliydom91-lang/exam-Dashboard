import { createTheme } from '@mui/material/styles'

export const getTheme = (mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,

            ...(mode === 'light'
                ? {
                    background: {
                        default: '#F5F7FA',
                        paper: '#FFFFFF',
                    },

                    text: {
                        primary: '#1A1A1A',
                        secondary: '#666666',
                    },

                    title: {
                        main: '#1A1A1A',
                    },

                    body1: {
                        main: '#333333',
                    },

                    body2: {
                        main: '#666666',
                    },
                }
                : {
                    background: {
                        default: '#121212',
                        paper: '#1E1E1E',
                    },

                    text: {
                        primary: '#FFFFFF',
                        secondary: '#BDBDBD',
                    },

                    title: {
                        main: '#FFFFFF',
                    },

                    body1: {
                        main: '#E0E0E0',
                    },

                    body2: {
                        main: '#A0A0A0',
                    },
                }),
        },

        typography: {
            fontFamily: 'Inter, Arial, sans-serif',

            h1: {
                fontSize: '32px',
                fontWeight: 700,
                color: mode === 'light' ? '#1A1A1A' : '#FFFFFF',
            },

            h2: {
                fontSize: '28px',
                fontWeight: 700,
                color: mode === 'light' ? '#1A1A1A' : '#FFFFFF',
            },

            h3: {
                fontSize: '24px',
                fontWeight: 600,
                color: mode === 'light' ? '#1A1A1A' : '#FFFFFF',
            },

            body1: {
                fontSize: '16px',
                color: mode === 'light' ? '#333333' : '#E0E0E0',
            },

            body2: {
                fontSize: '14px',
                color: mode === 'light' ? '#666666' : '#A0A0A0',
            },
          },

        shape: {
            borderRadius: 8,
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: 8,
                    },
                },
            },

            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    })