import imgCarrito from './assest/imgCarrito.png'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import {Link} from 'react-router-dom';
import './CartWidget.css'



const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    
    return (
        <div >
            <Link to='/cart' className='compras'>
                <img  src={imgCarrito}  alt="Carrito de Compras"  /> 
                {
                    cantidadTotal > 0 && <span className='cantidadTotal'> {cantidadTotal}</span>
                }
            </Link>
            
        </div>
    )
}

export default CartWidget