import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { CarritoContext} from '../../context/CarritoContext'
import { useContext } from "react";

const ItemDetail = ({id, name, img, categoryId, description, price, stock}) => {

    const [agregarCantidad, setAgregarCantidad] =  useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) =>{
        setAgregarCantidad(cantidad);

        const item = {id, name, price};
        agregarProducto(item, cantidad);
        
    }
    return (
        
        <Card border="dark"  className="detalles" >
            <Card.Img className="img"  src={img} alt={name} />
            <Card.Body className="contenedor">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                    <strong>Id:</strong> {id}
                </Card.Text>
                <Card.Text >
                    <strong>Categoría:</strong> {categoryId}
                </Card.Text>
                <Card.Text className="Info">
                    <strong>Precio:</strong> ${price}
                </Card.Text>
                <Card.Text  >
                    <strong>Descripción:</strong>  {description}
                </Card.Text>
                {
                    agregarCantidad > 0 ? (<Link to="/cart" className="btn btn-outline-dark">Terminar Compra</Link>) : (<ItemCount initial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail