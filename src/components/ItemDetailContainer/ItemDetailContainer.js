import React, { useEffect, useState } from "react";
import { useParams } from 'react-router'
import { pedirDatos } from "../ItemListContainer/pedirDatos";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

  const [carga, setCarga] = useState(false);
  const [producto, setProducto] = useState();
  const { prodId } = useParams();

  useEffect(() => {

    setCarga(true);
    pedirDatos()
      .then( funciona => {
        setProducto( funciona.find( prod => prod.id === Number(prodId) ) )
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
      {carga ? <h3>Cargando productos...</h3> : <ItemDetail {...producto} />}
    </>
  );
};
