function Formulario(botao, eventoTeclado){
    return(
        <form>
            <input type="text" onChange={eventoTeclado} name="nome" placeholder="Produto"/>
            <input type="text" onChange={eventoTeclado} name="preço" placeholder="Preço"/>

            {
                botao ? <input type="button" value="Cadastrar"/> : <div> <input type="button" value="Alterar"/> <input type="button" value="Deletar"/> <input type="button" value="Cancelar"/> </div> 
            }
    
        </form>
    )
}

export default Formulario;