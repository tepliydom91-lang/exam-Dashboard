import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 32px;

    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
`;