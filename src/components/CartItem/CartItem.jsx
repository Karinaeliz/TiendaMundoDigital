import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import Card from 'react-bootstrap/Card';
import { FaTrashAlt} from "react-icons/fa";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <Card className="mb-5"  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Cantidad: {cantidad}</Card.Text>
        <Card.Text>Precio: {item.price}</Card.Text>
        <button onClick={()=> eliminarProducto(item.id)} className="btn btn-outline-dark">Eliminar<FaTrashAlt/></button>
      </Card.Body>
    </Card>
  )
}

export default CartItem