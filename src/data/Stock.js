import corona from '../assets/Productos/Cervezas/corona.jpg';
import estrellaGalicia from "../assets/Productos/Cervezas/estrellaGalicia.jpg";
import patagonia from "../assets/Productos/Cervezas/patagonia.jpg";
import RedLabel from "../assets/Productos/Whisky/RedLabel.jpg";
import BlackLabel from "../assets/Productos/Whisky/BlackLabel.jpg";
import DoubleBlackLabel from "../assets/Productos/Whisky/DoubleBlackLabel.jpg";

export const stock = [
    {
        id: 1,
        precio: 50,
        nombre: "Corona",
        imagen: corona,
        detalle: "750ml",
        categoria: "Cerveza",
    },
    {
        id: 2,
        precio: 45,
        nombre: "Estrella Galicia",
        imagen: estrellaGalicia,
        detalle: "450ml",
        categoria: "Cerveza",
    },
    {
        id: 3,
        precio: 75,
        nombre: "Patagonia",
        imagen: patagonia,
        detalle: "750ml",
        categoria: "Cerveza",
    },
    {
        id: 4,
        precio: 700,
        nombre: "Jhonny Walker Red Label",
        imagen: RedLabel,
        detalle: "1L",
        categoria: "Whisky",
    },
    {
        id: 5,
        precio: 1000,
        nombre: "Jhonny Walker Black Label",
        imagen: BlackLabel,
        detalle: "1L",
        categoria: "Whisky",
    },
    {
        id: 6,
        precio: 1500,
        nombre: "Jhonny Walker Double Black Label",
        imagen: DoubleBlackLabel,
        detalle: "1L",
        categoria: "Whisky",
    }
]