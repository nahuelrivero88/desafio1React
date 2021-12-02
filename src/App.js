import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartView } from './components/CartView/CartView';
import { CartContext } from './context/CartContext';


function App() {

  const [carrito, setCarrito] = useState([]);
  console.log(carrito)

  const agregarCarrito = (item) => {
    setCarrito([...carrito, item])
  }

  const quitarCarrito = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id));
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  const productoDuplicado = (id) => {
    return carrito.some(prod => prod.id === id)
  }
  
  return (
    <CartContext.Provider value={{
      carrito,
      agregarCarrito,
      quitarCarrito,
      vaciarCarrito,
      productoDuplicado
    }}>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:prodId" element={<ItemListContainer/>} />
        <Route path="/detail/:prodId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartView/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;