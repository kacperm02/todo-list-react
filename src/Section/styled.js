import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 20px;
    margin:25px 50px;
    max-width: 600px;
    width: 80%;
    border: 1px solid black;
    background-color: white;
    box-shadow: 0 0 5px black;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    font-size: 15px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    text-align: left;
    align-items: end;
    border-bottom: 1px solid grey;
    padding: 15px;
    color:teal;
    background-color: white;
`;

export const ListHeader = styled.li`
    font-size: 20px;
    margin: 0;
    color: black;
    font-weight:bold;
`;