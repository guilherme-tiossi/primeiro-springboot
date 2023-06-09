import { useEffect, useState } from 'react';
import Formulario from './formulario';
import Tabela from './tabela';
import './App.css';

function App() {

  // Objeto produto
  const produto = {
    codigo: 0,
    nome: "",
    preco: ""
  }

  // UseStates
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto)

  // UseEffect (document.ready do jquery)
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  // Cadastrar Produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem != undefined) {
          alert(retorno_convertido.mensagem)
        } else {
          setProdutos([...produtos, retorno_convertido])
          alert("Produto incluído com sucesso!")
          limparFormulario()
        }
      })
  }

  // Deletar Produto
  const deletar = () => {
    fetch("http://localhost:8080/deletar/" + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);
        // Cópia do vetor de produtos
        let arrayTemp = [...produtos];

        // Índice
        let index = arrayTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        // Remover produto do arrayTemp
        arrayTemp.splice(index, 1);

        // Atualizar o array de produtos
        setProdutos(arrayTemp);
        limparFormulario();
      })
  }

  // Alterar
  const alterar = () => {
    fetch("http://localhost:8080/alterar",{
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem != undefined) {
          alert(retorno_convertido.mensagem)
        } else {
          alert("Produto alterado com sucesso!")

          let arrayTemp = [...produtos];

          // Índice
          let index = arrayTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          // Alterar do arrayTemp
          arrayTemp[index] = objProduto;

          // Atualizar o array de produtos
          setProdutos(arrayTemp);
          limparFormulario()
        }
      })
  }

  // Limpar Formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  // Selecionar Produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  // Retorno
  return (
    <div className="App">
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} deletar={deletar} obj={objProduto} cancelar={limparFormulario} alterar={alterar}/>
      <Tabela array={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
