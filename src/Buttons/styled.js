import styled, {css} from "styled-components";

export const Button = styled.button`
    background-color: white;
    border:none;
    color:teal;

    &:hover {
        color:rgb(0, 181, 181);
        transition: 0.5s;
        cursor: pointer;
    }

    ${({disabled}) => disabled && css`
        color: grey;
    `}
`;