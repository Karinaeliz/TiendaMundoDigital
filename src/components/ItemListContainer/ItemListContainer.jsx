import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';


const ItemListContainer = ({ greeting}) => { 
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect( ()=> {
        const misProductos = categoryId ? query(collection(db, "ItemCollection"), where("categoryId", "==", categoryId)) : collection(db, "ItemCollection");
        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(nuevosProductos);
            })
            .catch(error => console.error(error))
    }, [categoryId])
    


return (
    
    <section  className='container'>
        <div>
            <h2>{greeting}</h2>
            <ItemList className="productos" products={products}/>
        </div>
    </section>
)
}

export default ItemListContainer