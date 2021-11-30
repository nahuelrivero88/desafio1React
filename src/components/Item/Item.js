import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import "./Item.css"

export const Item = ({ id, precio, nombre, imagen, detalle, categoria }) => {
  return (
    <article key={id} className="card m-3" style={{ width: "18rem" }}>
      <img src={imagen} alt={nombre} variant="top" />
      <div className="card-body">
        <h3 className="card-title text-center">{nombre}</h3>
        <p className="card-text text-center">Detalle: {categoria} - {detalle}</p>
        <p className="card-text text-center">Precio: ${precio}</p>
        <ItemCount stock="5" />
        <Link to={`/detail/${id}`} className="btn btn-dark">Más detalles...</Link>
      </div>
    </article>
  );
};
