import { Stock } from "../../data/Stock"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(Stock)
        }, 2000)
    })
}