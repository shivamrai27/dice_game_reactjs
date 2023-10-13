import React from 'react'
import styled from 'styled-components'

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className='text'>
                <p>Select any number.</p>
                <p>Click on dice image.</p>
                <p>After click on  dice  if selected number is equal to dice number you will get same point as dice.</p>
                <p>If you get wrong guess then  2 point will be dedcuted.</p>
                <p></p>
            </div>

        </RulesContainer>
    )
}

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    padding:20px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 20px;
    h2{
        font-size: 24px;
        
    }
    .text{
        margin-top: 24px;
    }
`
export default Rules