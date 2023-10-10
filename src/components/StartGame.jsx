import React from 'react'
import styled from 'styled-components'

const StartGame = () => {
    return (
        <Container>

            <div>
                <img src='images/dices.png' alt='Dice Image' />
            </div>
            <div>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin:0 auto;
    align-items: center;
    
`
const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
`


export default StartGame