function Formulario({botao, eventoTeclado, cadastrar}){
    return(
        <form>
            <input type="text" onChange={eventoTeclado} name="nome" placeholder="Produto"/>
            <input type="number" onChange={eventoTeclado} name="preco" placeholder="Preço"/>

            {
                botao ? <input type="button" value="Cadastrar" onClick={cadastrar}/> : <div> <input type="button" value="Alterar"/> <input type="button" value="Deletar"/> <input type="button" value="Cancelar"/> </div> 
            }
    
        </form>
    )
}

export default Formulario;