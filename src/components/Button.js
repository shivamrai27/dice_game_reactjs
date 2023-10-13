import styled from 'styled-components'
export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s ease-in;
        cursor: pointer;
    }
`;

export const OutlineButton = styled(Button)`
    color: black;
    background: white;
    border: 1px solid black;
    font-weight: 700;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
        transition: 0.2s ease-in;
        cursor: pointer;
    }
`;