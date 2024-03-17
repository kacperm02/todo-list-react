import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    color:rgb(50, 50, 50);
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border: none;
    background-color:teal;
    color:white;

    &:hover {
        background-color:rgb(0, 181, 181);
        transform: scale(0.9);
        transition: 0.5s;
    }
`;
    