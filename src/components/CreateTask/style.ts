import { styled } from "@mui/material/styles"

export const Form = styled("form")`
    width: 100%;
    max-width: 700px;

    margin: 40px auto;
    padding: 32px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    box-sizing: border-box;

    background-color: ${({ theme }) => theme.palette.background.paper};
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 12px;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`

export const Title = styled("h2")`
    margin: 0;

    color: ${({ theme }) => theme.palette.text.primary};

    font-size: 28px;
    font-weight: 700;
`

export const Subtitle = styled("p")`
    margin: -12px 0 8px;

    color: ${({ theme }) => theme.palette.text.secondary};

    font-size: 14px;
`

export const Fields = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
`

export const FullWidth = styled("div")`
    grid-column: 1 / -1;
`

export const SubmitButton = styled("button")`
    width: 100%;

    padding: 12px 20px;

    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};

    font-family: inherit;
    font-size: 16px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s ease;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: translateY(1px);
    }
`
