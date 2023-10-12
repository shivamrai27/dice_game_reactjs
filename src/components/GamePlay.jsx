import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {
    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore />
                <NumberSelector />
            </div>
            <RoleDice />
        </MainContainer>
    )
}
const MainContainer = styled.main`
    .top_section{
        
        display: flex;
        align-items: end;
        justify-content:space-around;
        padding-top:60px;      
        border: 2px solid black;
    }

`

export default GamePlay