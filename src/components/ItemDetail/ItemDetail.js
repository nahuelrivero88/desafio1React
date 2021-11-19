import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({id, precio, nombre, imagen}) => {

    return (

      <article key={id} className="card m-3" style={{width: "18rem"}}>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-text">Precio: ${precio}</p>
                <ItemCount stock="5"/>
            </div>
        </article>
    )
}