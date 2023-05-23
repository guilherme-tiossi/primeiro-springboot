import {useState} from 'react';
import Formulario from './formulario';
import Tabela from './tabela';
import './App.css';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <div className="App">
      <Formulario botao={btnCadastrar}/>
      <Tabela />
    </div>
  );
}

export default App;
