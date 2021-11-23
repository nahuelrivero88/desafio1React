import React, { useEffect, useState } from 'react'
import { PedirDatos } from './PedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [carga, setCarga] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setCarga(true)
        PedirDatos()
            .then( (funciona) => {
                setProductos(funciona)
            })
            .catch( (mal) => {
                alert(mal)
            })
            .finally(() => {
                setCarga(false)
            })

    }, [])

    return (
        <>
            {
                carga
                    ? <h3>Cargando productos...</h3> 
                    : <ItemDetail items={productos}/>
            }
        </>
    )
};
