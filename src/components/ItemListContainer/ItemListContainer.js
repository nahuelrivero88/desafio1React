import { ProductCard } from "../ProductCard/ProductCard";
import corona from "../../assets/Productos/Cervezas/corona.jpg";
import estrellaGalicia from "../../assets/Productos/Cervezas/estrellaGalicia.jpg";
import patagonia from "../../assets/Productos/Cervezas/patagonia.jpg";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="itemListContainer"> {greeting} </h1>
      <div className="listaProductos">
        <ProductCard img={corona} nombre="Cerveza Corona" />
        <ProductCard img={estrellaGalicia} nombre="Cerveza Estrella Galicia" />
        <ProductCard img={patagonia} nombre="Cerveza Patagonia" />
      </div>
    </div>
  );
};
