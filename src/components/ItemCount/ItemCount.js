import React from "react";
import {Button} from "react-bootstrap";
import "./ItemCount.css"

export const ItemCount = ({stock, counter, setCounter, onAdd}) => {
    
    const sumar = () => {
        if (stock > counter){
            setCounter(counter+1);
        }else {
            alert("Monto máximo es 5");
        }
    }
    const restar = () => {
        if(counter > 1){
        setCounter(counter-1);
        }else {
            alert("Monto mínimo es 1");
        }
    }

    return (
        <div>
            <h2 className="text-center"> {counter} </h2>
            <div className="SumRest">
            <Button className="btn btn-restar" variant="danger" onClick={restar}>-</Button>
            <Button className="btn btn-sumar" variant="success" onClick={sumar}>+</Button>
            </div>
            <button className="btn btn-dark" onClick={onAdd}>Agregar al carrito </button>
            

        </div>
    )
}
