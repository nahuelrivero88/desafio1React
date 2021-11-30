import React from 'react'
import { useNavigate } from 'react-router'

export const ItemDetail = ({id, nombre, imagen, precio, categoria}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre}/>
            <p>{categoria}</p>
            <p>Precio: ${precio}</p>
            <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
        </div>
    )
}