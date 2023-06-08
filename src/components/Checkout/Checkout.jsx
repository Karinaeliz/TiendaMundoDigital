import './Checkout.css'
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/firebaseConfig';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import Alert from 'react-bootstrap/Alert';

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario =(e)=>{
        e.preventDefault()
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor complete todos los campos");
            return;

        }
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(product => ({
                id: product.item.id,
                nombre: product.item.name,
                cantidad: product.cantidad,
        })),
        total: carrito.reduce((total, product)=> total + product.item.price * product.cantidad, 0),
        nombre,
        apellido,
        telefono,
        email,
        fecha: new Date(),
    };
    Promise.all(
        orden.items.map(async (productoOrden) => {
            
            const productoRef = doc(db, "ItemCollection", productoOrden.id);
            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;
        
            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad,
            });
            
        })
    )
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then((docRef) => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                })
                .catch((error) => {
                    console.error("Error al crear la orden", error);
                    setError("Se produjo un error al crear la orden");
                })
        })
        .catch((error) => {
            console.error("Error al actualizar el stock", error);
            setError("Se produjo un error al actualizar el stock de los productos, vuelva más tarde");
        })
}

    return (
    <div>
        <h2>Resumen de Compra</h2>
        <form onSubmit={manejadorFormulario} className='formulario'>
            {carrito.map(product =>(
                <div key={product.item.id}>
                    <p>
                        {product.item.name} X {product.cantidad}
                    </p>
                    <p>Precio $: {product.item.price}</p>
                    <hr />
                </div>
            ))}
            <p>Total Compra: $ {total}</p>
            <hr />
            <div className='form-group'>
                <label htmlFor="">Nombre</label>
                <input className='form-control' placeholder="Ingresa tu nombre" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Apellido</label>
                <input className='form-control' placeholder="Ingresa tu apellido"  type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Telefono</label>
                <input className='form-control' placeholder="ingresa tu número de teléfono " type="number" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Email</label>
                <input className='form-control' placeholder="ingresa tu email " type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Confirmar Email</label>
                <input className='form-control' placeholder="Asegurate de ingresar el mismo email del campo anterior " type="email" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
            </div>
            {error && <p> {error} </p>}
            <button type='submit' className="btn btn-outline-dark mb-5">Finalizar Compra</button>
        </form>
        {
            ordenId && (
                <>
                    <Alert variant="success">
                        <Alert.Heading>¡Gracias por tu compra!</Alert.Heading>
                        <strong>Tu número de Orden es🛒{ordenId} </strong>
                    </Alert>
                </>
                
                
            )
        }
    </div>
  )
}

export default Checkout