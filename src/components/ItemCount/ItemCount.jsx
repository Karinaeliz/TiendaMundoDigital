
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


const ItemCount = ({stock, initial, funcionAgregar}) => {
    const [contador, setContador] = useState(initial)

    const increment = () => {
        if(contador < stock){
            setContador(contador +1)
        }
    }
    const decrement =() => {
        if(contador > initial){
            setContador(contador -1)
        }
    }
    return (
    <div className="Counter ms-5">
        <div className="Controls" >
            <Button  variant="outline-dark" onClick={decrement}> - </Button>
            <h4 className="Number">{contador}</h4>
            <Button variant="outline-dark" onClick={increment}> + </Button>
        </div>
        <div>
            <Button variant="outline-dark" className="mt-5 btn btn-outline-dark "  onClick={() => funcionAgregar(contador)}> Agregar al carrito</Button>
        </div>
    </div>
    )
}

export default ItemCount