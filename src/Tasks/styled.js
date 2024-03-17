import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding:0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({hidden}) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration:line-through;
    `}
`;

export const Button = styled.button`
    border:none;
    width: 50px;
    height: 50px;
    padding: 0;
    color:white;

    ${({toggleDone}) => toggleDone && css`
        background: hsl(120, 98%, 35%);

        &:hover {
            background: hsl(120, 98%, 45%);
            transition: 0.5s;
        }
    `}

    ${({remove}) => remove && css`
        background: hsl(0, 98%, 35%);

        &:hover {
            background: hsl(0, 98%, 45%);
            transition: 0.5s;
        }
    `}
`;