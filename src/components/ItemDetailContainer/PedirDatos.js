import { Productos } from "../../Productos.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(Productos)
        }, 2000)
    })
}