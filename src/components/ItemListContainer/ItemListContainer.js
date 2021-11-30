import React, { useEffect, useState } from "react";
import { useParams } from 'react-router'
import { pedirDatos } from "./pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [carga, setCarga] = useState(false);
  const [productos, setProductos] = useState([]);
  const { prodId } = useParams();

  useEffect(() => {

    setCarga(true);
    pedirDatos()
      .then((funciona) => {
         if (!prodId) {
                    setProductos(funciona)
                } else {
                    setProductos( funciona.filter( prod => prod.categoria === prodId) )
                }
      })
      .catch((mal) => {
        alert(mal);
      })
      .finally(() => {
        setCarga(false);
      });
  }, [prodId]);

  return (
    <>
      {carga ? <h3>Cargando productos...</h3> : <ItemList items={productos} />}
    </>
  );
};
