

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, name, img, price, stock}) => {
    return (
            <Card border="dark" className='productos'>
                <Card.Img variant="top"src={img} alt={name}  className='imgProd'/>
                <Card.Body>
                    <Card.Title className='mt-2'>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        <strong>Precio:</strong>  ${price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Stock disponible:</strong> {stock}
                    </Card.Text>
                    <Link  to={`/item/${id}` } className='Option btn btn-outline-dark'> Ver Detalles </Link>
                </Card.Body>
            </Card>
        
    )
}

export default Item