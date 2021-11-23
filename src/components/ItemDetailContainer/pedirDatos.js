import { stock } from "../../data/Stock"

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}