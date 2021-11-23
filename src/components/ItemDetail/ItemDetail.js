import React from "react";
import { Container, Row } from "react-bootstrap";

import "./ItemDetail.css";

export const ItemDetail = () => {
  return (
    <Container>
      <h1 className="tituloInicial"> Distribuidora Riverinhio </h1>
      <Row>
        <article key="1" className="card m-3" style={{ width: "18rem" }}>
          <img
            src= "https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/botella_cerveza_corona_355cc.jpg"
            alt="Corona"
            variant="top"
          />
          <div className="card-body">
            <h3 className="card-title text-center">Corona</h3>
            <p className="card-text text-center">Precio: $45</p>
          </div>
        </article>
      </Row>
    </Container>
  );
};
