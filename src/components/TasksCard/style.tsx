import { styled } from "@mui/material/styles"

export const StyledCard = styled("li")`
    list-style: none;

    padding: 16px;

    background: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 10px;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 14px rgba(0, 0, 0, 0.1);
    }
`

export const Header = styled("div")`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    margin-bottom: 10px;
`

export const Title = styled("h3")`
    margin: 0;

    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
`

export const Description = styled("p")`
    margin: 0 0 16px;

    color: #666;
    font-size: 14px;
    line-height: 1.5;
`

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

export const Label = styled("span")`
    color: #888;

    font-size: 12px;
    font-weight: 500;
`

export const Value = styled("span")`
    color: #333;

    font-size: 13px;
`

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

export const Comments = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;
    padding-top: 12px;

    border-top: 1px solid #eee;
`

export const Comment = styled("div")`
    padding: 8px 10px;

    background: #f7f7f8;
    border-radius: 6px;
`

export const CommentText = styled("p")`
    margin: 0 0 4px;

    font-size: 13px;
    line-height: 1.4;
`

export const CommentAuthor = styled("span")`
    color: #888;

    font-size: 11px;
`