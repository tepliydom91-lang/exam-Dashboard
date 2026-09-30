import { styled } from "@mui/material/styles"


export const SearchInput = styled("input")`
    flex: 1;

    padding: 10px 12px;

    border: 1px solid #e1e4e8;
    border-radius: 8px;

    background: #ffffff;

    color: #333;
    font-size: 14px;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: #999;
    }

    &:focus {
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }
`

export const PrioritySelect = styled("select")`
    padding: 10px 12px;

    border: 1px solid #e1e4e8;
    border-radius: 8px;

    background: #ffffff;

    color: #333;
    font-size: 14px;

    outline: none;

    cursor: pointer;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &:focus {
        border-color: #1976d2;
        box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }
`

export const Filters = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    margin-bottom: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`