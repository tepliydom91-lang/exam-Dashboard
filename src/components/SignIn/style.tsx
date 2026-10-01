import { styled } from "@mui/material/styles"

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

export const ErrorMessage = styled("div")(({ theme }) => ({
    padding: "10px 12px",

    color:
        theme.palette.mode === "light"
            ? "#B91C1C"
            : "#FCA5A5",

    background:
        theme.palette.mode === "light"
            ? "#FEF2F2"
            : "#3B1F1F",

    border: `1px solid ${theme.palette.mode === "light"
            ? "#FECACA"
            : "#6B2A2A"
        }`,

    borderRadius: 8,

    fontSize: 13,
    lineHeight: 1.4,
}))

export const LoadingWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",

    color: theme.palette.primary.main,
}))