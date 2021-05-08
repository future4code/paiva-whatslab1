import './App.css';
import Mensagem from './components/Mensagem/Mensagem';
import styled from 'styled-components'

const footer = styled.div`
border:1px solid black;
padding: 2px;

`

function App() {
  return (
    <div className="App">
      <footer>
     <Mensagem></Mensagem>
     </footer>
    </div>
  );
}

export default App;
