import { styled } from "@mui/material/styles"

export const Wrapper = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const Label = styled("label")`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
`

export const StyledTextarea = styled("textarea")`
    width: 100%;
    min-height: 100px;
    padding: 12px 14px;

    box-sizing: border-box;

    font-family: inherit;
    font-size: 16px;
    line-height: 1.5;

    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.paper};

    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 8px;

    outline: none;
    resize: vertical;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    &:hover {
        border-color: ${({ theme }) => theme.palette.text.secondary};
    }

    &:focus {
        border-color: ${({ theme }) => theme.palette.primary.main};
        box-shadow: 0 0 0 2px
            ${({ theme }) => `${theme.palette.primary.main}20`};
    }
`

export const ErrorText = styled("span")`
    font-size: 12px;
    color: #d32f2f;
`