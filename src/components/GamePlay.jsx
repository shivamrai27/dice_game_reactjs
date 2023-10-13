import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("Please select a number")
            return
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    }

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice currentDice={currentDice}
                roleDice={roleDice}
            />
        </MainContainer>
    )
}
const MainContainer = styled.main`
    .top_section{
        
        display: flex;
        align-items: end;
        justify-content:space-around;
        padding-top:60px;      
    }

`

export default GamePlay