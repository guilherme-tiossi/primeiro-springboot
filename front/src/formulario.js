function Formulario({botao, eventoTeclado, cadastrar, deletar, obj, cancelar, alterar}){
    return(
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Produto"/>
            <input type="number" value={obj.preco} onChange={eventoTeclado} name="preco" placeholder="Preço"/>

            {
                botao ? <input type="button" value="Cadastrar" onClick={cadastrar}/> 

                : <div> <input type="button" value="Alterar" onClick={alterar}/> 
                        <input type="button" value="Deletar" onClick={deletar}/> 
                        <input type="button" value="Cancelar" onClick={cancelar}/> </div> 
            }
    
        </form>
    )
}

export default Formulario;