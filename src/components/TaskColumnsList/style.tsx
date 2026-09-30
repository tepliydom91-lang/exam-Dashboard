import { styled } from "@mui/material/styles"

export const Board = styled("div")`
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
`

export const Columns = styled("ul")`
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    gap: 20px;

    margin: 0;
    padding: 0;

    list-style: none;

    overflow-x: auto;
`

export const Column = styled("li")`
    min-width: 250px;
    min-height: 400px;

    padding: 16px;

    background-color: #f5f6f8;
    border: 1px solid #e1e4e8;
    border-radius: 12px;

    box-sizing: border-box;
`

export const ColumnTitle = styled("h2")`
    margin: 0 0 16px;

    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
`