function Tabela({array, selecionar}){
    return(
        <table>
            <thead>
                <tr>
                    <th> # </th>
                    <th> Produto </th>
                    <th> Preço </th>
                    <th> Selecionar </th>
                </tr>
            </thead>

            <tbody>
                {
                    array.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.codigo}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.preco}</td>
                            <td><button onClick={() => {selecionar(index)}}> Selecionar </button></td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela;