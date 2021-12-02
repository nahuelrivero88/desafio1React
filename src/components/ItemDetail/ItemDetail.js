import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

export const ItemDetail = ({ id, nombre, imagen, precio, detalle, categoria, stock}) => {

    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)
    const [agregar, setAgregar] = useState(false)

    const handleVolver = () => {
        navigate(-1)
    }
    const handleAgregar = () => {
        if (counter > 0) {
            console.log('Producto agregado al carrito:', {
                nombre,
                precio,
                counter
            })
        
            setAgregar(true)
        }   
    }
    return (

        <article key={id} className="card m-3" style={{ width: "18rem" }}>
            <img src={imagen} alt={nombre} variant="top" />
            <div className="card-body">
                <h3 className="card-title text-center">{nombre}</h3>
                <p className="card-text text-center">Detalle: {categoria} - {detalle}</p>
                <p className="card-text text-center">Precio: ${precio}</p>
                {
                !agregar
                ?   <ItemCount 
                        stock = "5"
                        counter={counter} 
                        setCounter={setCounter}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-dark">Terminar mi compra</Link>
            }
                <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
            </div>
        </article>
    )
}