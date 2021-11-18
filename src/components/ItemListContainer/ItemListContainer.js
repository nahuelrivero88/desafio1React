import React, { useEffect, useState } from 'react'
import { pedirDatos } from './pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [carga, setCarga] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setCarga(true)
        pedirDatos()
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
                    : <ItemList items={productos}/>
            }
        </>
    )
};
