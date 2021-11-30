import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'
import './ItemList.css'


export const ItemList = ({items}) => {

    return (
        <Container>
            <h1 className="tituloInicial"> Distribuidora Riverinhio </h1>
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}
