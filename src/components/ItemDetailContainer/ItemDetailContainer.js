import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { PedirDatos } from "./PedirDatos"

export default function ItemList(props) {
  const [items, setItems] = useState(false);

  useEffect((async) => {
    PedirDatos();
    fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/saboritech/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      {items !== false
        ? items.map((producto, i) => (
            <ItemDetail nombre={producto.nombre} precio={producto.precio} />
          ))
        : "no hay"}
    </div>
  );
}
