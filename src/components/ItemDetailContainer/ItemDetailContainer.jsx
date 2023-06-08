import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom" 
import './ItemDetailContainer.css'
import { getDoc, doc} from "firebase/firestore";
import { db} from '../../services/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { idItem } = useParams()

    useEffect( ()=>{
        const nuevoDoc = doc(db, "ItemCollection", idItem);
        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = {id: res.id, ...data}
            setProduct(nuevoProducto);
        })
        .catch(error => console.error(error))
    }, [idItem])


    return (
        <div className='ItemDetailContainer ' >
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer