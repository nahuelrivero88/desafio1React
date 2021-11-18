import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({id, precio, nombre, imagen}) => {

    return (

      <article key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={imagen} alt={nombre} variant="top" />
            <div className="card-body">
                <h3 className="card-title text-center">{nombre}</h3>
                <p className="card-text text-center">Precio: ${precio}</p>
                <ItemCount stock="5"/>
            </div>
        </article>
    )
}
