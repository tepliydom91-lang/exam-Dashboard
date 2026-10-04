import { styled } from '@mui/material/styles';

export const Form = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: "100%",
    maxWidth: 420,
    padding: 32,
    boxSizing: "border-box",

    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 12,

    boxShadow:
        theme.palette.mode === "light"
            ? "0 4px 20px rgba(0, 0, 0, 0.08)"
            : "0 4px 20px rgba(0, 0, 0, 0.35)",

    transition:
        "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",

    [theme.breakpoints.down("sm")]: {
        padding: 24,
    },
}))

export const Title = styled("h1")(({ theme }) => ({
    margin: 0,
    marginBottom: 4,

    color: theme.palette.text.primary,

    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.2,

    textAlign: "center",
}))

export const Subtitle = styled("p")(({ theme }) => ({
    margin: 0,
    marginBottom: 8,

    color: theme.palette.text.secondary,

    fontSize: 14,
    lineHeight: 1.5,

    textAlign: "center",
}))



export const LoadingWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",

    color: theme.palette.primary.main,
}))