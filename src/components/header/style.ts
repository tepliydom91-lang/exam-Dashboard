import { styled } from "@mui/material/styles"

export const HeaderWrapper = styled("header")`
    width: 100%;
    min-height: 64px;
    padding: 0 24px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.palette.background.paper};
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

export const HeaderActions = styled("div")`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const ThemeButton = styled("button")`
    width: 40px;
    height: 40px;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.palette.text.primary};
    background-color: transparent;

    border: none;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.palette.action.hover};
    }
`

export const CreateTaskLink = styled("a")`
    padding: 8px 16px;

    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;

    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 8px;

    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.palette.action.hover};
    }
`