import { styled } from "@mui/material/styles"

export const StyledCard = styled("li")(({ theme }) => ({
    listStyle: "none",

    padding: "16px",

    background: theme.palette.background.paper,

    border: `1px solid ${theme.palette.divider}`,

    borderRadius: "10px",

    boxShadow:
        theme.palette.mode === "light"
            ? "0 2px 6px rgba(0, 0, 0, 0.06)"
            : "0 2px 6px rgba(0, 0, 0, 0.3)",

    transition: "transform 0.2s ease, box-shadow 0.2s ease",

    "&:hover": {
        transform: "translateY(-2px)",

        boxShadow:
            theme.palette.mode === "light"
                ? "0 5px 14px rgba(0, 0, 0, 0.1)"
                : "0 5px 14px rgba(0, 0, 0, 0.5)",
    },
}))

export const Header = styled("div")`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    margin-bottom: 10px;
`

export const Title = styled("h3")(({ theme }) => ({
    margin: 0,

    fontSize: "17px",
    fontWeight: 600,
    lineHeight: 1.3,

    color: theme.palette.text.primary,
}))

export const Description = styled("p")(({ theme }) => ({
    margin: "0 0 16px",

    color: theme.palette.text.secondary,

    fontSize: "14px",
    lineHeight: 1.5,
}))

export const Info = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-top: 12px;

    border-top: 1px solid #eee;
`

export const InfoItem = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const Label = styled("span")(({ theme }) => ({
    color: theme.palette.text.secondary,

    fontSize: 12,
    fontWeight: 500,
}))

export const Value = styled("span")(({ theme }) => ({
    color: theme.palette.mode === "light"
        ? "#333333"
        : "#FFFFFF",

    fontSize: "13px",
}))

export const Priority = styled("span") <{
    $priority: "low" | "normal" | "high"
}>`
    padding: 4px 8px;

    border-radius: 6px;

    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;

    background: ${({ $priority }) =>
        $priority === "high"
            ? "#fee2e2"
            : $priority === "normal"
                ? "#fef3c7"
                : "#dcfce7"};

    color: ${({ $priority }) =>
        $priority === "high"
            ? "#b91c1c"
            : $priority === "normal"
                ? "#92400e"
                : "#166534"};
`

export const Status = styled("span") <{
    $status: "todo" | "in-progress" | "review" | "done"
}>`
    font-size: 13px;
    font-weight: 500;
`

export const Comments = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 8,

    marginTop: 16,
    paddingTop: 12,

    borderTop: `1px solid ${theme.palette.divider}`,
}))

export const Comment = styled("div")(({ theme }) => ({
    padding: "8px 10px",

    background: theme.palette.mode === "light"
        ? "#F7F7F8"
        : "#2A2A2A",

    borderRadius: 6,

    border: `1px solid ${theme.palette.mode === "light"
            ? "#EEEEEE"
            : "#333333"
        }`,
}))

export const CommentText = styled("p")(({ theme }) => ({
    margin: "0 0 4px",

    color: theme.palette.text.primary,

    fontSize: 13,
    lineHeight: 1.4,
}))

export const CommentAuthor = styled("span")(({ theme }) => ({
    color: theme.palette.text.secondary,

    fontSize: 11,
}))

