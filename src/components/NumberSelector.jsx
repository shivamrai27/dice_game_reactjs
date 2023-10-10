import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6]
    const [selectedNumber, setSelectedNumber] = useState();
    console.log(setSelectedNumber);
    return (
        <div className='numbers'>
            {arrNumber.map((num, i) =>
                <Box key={i}
                    onClick={() => setSelectedNumber(num)}>{num}
                </Box>
            )}

        </div>
    )
}
const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
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
`
export default NumberSelector