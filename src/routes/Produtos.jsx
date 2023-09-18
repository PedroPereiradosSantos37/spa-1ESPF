import React from "react"
import { ListaProduto } from "../components/ListaProdutos"

export default fuction Produtos() {
    document.title = "Lista de Produtos"

    return(
        <div>
            <h1>Produtos</h1>
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                </tr>
                </table>    

                    {ListaProduto.map((item, indice)=>(
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.desc}</td>
                            <td>{item.preco}</td>
                        </tr>    
    ))}


            </table>
        </div>
    )
}