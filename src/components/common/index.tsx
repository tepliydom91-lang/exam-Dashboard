import { styled } from '@mui/material/styles';

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