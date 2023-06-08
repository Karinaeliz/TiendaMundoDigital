import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import Card from 'react-bootstrap/Card';




const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
            <>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>No hay productos en el carrito</Card.Title>
                        <Link to='/' className="btn btn-outline-dark"> Ver Productos </Link>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <Card >
            <Card.Body>
                {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
                <Card.Text className="fw-bold">Total: ${total}</Card.Text>
                <Card.Text className="fw-bold">Cantidad Total: {cantidadTotal}</Card.Text>
                <button  onClick={() => vaciarCarrito()} className="btn btn-outline-dark me-3">Vaciar Carrito</button>
                <Link to='/checkout' className="btn btn-outline-dark me-3">Finalizar Compra</Link>
                <Link to="/" className="btn btn-outline-dark">Seguir Comprando🛒</Link>
            </Card.Body>
        </Card>
    )
}

export default Cart