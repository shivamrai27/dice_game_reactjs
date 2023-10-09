import './App.css'
import styled from 'styled-components';

function App() {
  return (
    <>
      <Button>This button by Styled components</Button>
    </>
  )
}
const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
`
export default App
