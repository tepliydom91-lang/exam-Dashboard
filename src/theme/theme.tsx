import { createTheme } from "@mui/material/styles"

export const getTheme = (mode: "light" | "dark") =>
    createTheme({
        palette: {
            mode,

            ...(mode === "light"
                ? {
                    background: {
                        default: "#F5F7FA",
                        paper: "#FFFFFF",
                    },

                    text: {
                        primary: "#1A1A1A",
                        secondary: "#666666",
                    },

                    divider: "#E1E4E8",

                    primary: {
                        main: "#1976D2",
                    },

                    action: {
                        hover: "#F0F2F5",
                    },
                }
                : {
                    background: {
                        default: "#121212",
                        paper: "#1E1E1E",
                    },

                    text: {
                        primary: "#FFFFFF",
                        secondary: "#BDBDBD",
                    },

                    divider: "#333333",

                    primary: {
                        main: "#90CAF9",
                    },

                    action: {
                        hover: "#2A2A2A",
                    },
                }),
        },

        typography: {
            fontFamily: "Inter, Arial, sans-serif",

            h1: {
                fontSize: "32px",
                fontWeight: 700,
            },

            h2: {
                fontSize: "28px",
                fontWeight: 700,
            },

            h3: {
                fontSize: "24px",
                fontWeight: 600,
            },

            body1: {
                fontSize: "16px",
            },

            body2: {
                fontSize: "14px",
            },
        },

        shape: {
            borderRadius: 8,
        },

        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        borderRadius: 8,
                    },
                },
            },

            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: "none",
                    },
                },
            },

            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: "none",
                    },
                },
            },

            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: mode === "light"
                            ? "#E1E4E8"
                            : "#333333",
                    },
                },
            },
        },
    })