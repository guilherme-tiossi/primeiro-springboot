function Formulario(botao){
    return(
        <form>
            <input type="text" placeholder="Produto"/>
            <input type="text" placeholder="Preço"/>

            {
                botao ? <input type="button" value="Cadastrar"/> : <div> <input type="button" value="Alterar"/> <input type="button" value="Deletar"/> <input type="button" value="Cancelar"/> </div> 
            }
    
        </form>
    )
}

export default Formulario;