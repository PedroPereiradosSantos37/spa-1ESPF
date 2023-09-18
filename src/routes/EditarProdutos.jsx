import React from "react"
import { useParams } from "react-router-dom"

export default function EditarProdutos(){
    
    const {id} = useParams();

    document.tile = "Editar Produtos + id";

    retur(
        <div>
            <h1>EditarProdutos</h1>
            <h2>Produtos selecionado: {id}</h2>
        </div>
    )
}