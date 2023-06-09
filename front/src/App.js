import {useEffect, useState} from 'react';
import Formulario from './formulario';
import Tabela from './tabela';
import './App.css';

function App() {

  // Objeto produto
  const produto = {
    codigo : 0,
    nome : "",
    preco : 0.0
  } 

  // UseStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto)

  // UseEffect (document.ready do jquery)
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem != undefined){
        alert(retorno_convertido.mensagem)
      } else {
        setProdutos([...produtos, retorno_convertido])
        alert("Produto incluído com sucesso!")
      }
    })
  }

  // Retorno
  return (
    <div className="App">
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
      <Tabela array={produtos} />
    </div>
  );
}

export default App;
