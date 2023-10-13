import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6]
    const NumberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

    return (
        <NumberSelectorContainer className='numbers'>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrNumber.map((value, i) =>
                    <Box key={i}
                        isSelected={value === selectedNumber}
                        onClick={() => NumberSelectorHandler(value)}>{value}
                    </Box>
                )}
            </div>
            <p>Select Number</p>

        </NumberSelectorContainer>
    )
}

const NumberSelectorContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
        display: flex;
        align-items: end;
    }
    .error{
        color: red;
    }
`


const Box = styled.div`
height: 72px;
width: 72px;
border: 2px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
/* transition: 0.2s ease-in; */
/* &:hover{
    background: black;
    color: white;
    cursor: pointer;
    transition: 0.2s ease-in;
} */
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")}
`

export default NumberSelector