import React, {useState} from "react";
import {Button} from "react-bootstrap";
import "./ItemCount.css"

export const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

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

        </div>
    )
}
