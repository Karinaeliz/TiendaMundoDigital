import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import error from '../src/Assest/error.png'
import './App.css'
import {CarritoProvider} from '../src/context/CarritoContext'
import Checkout from './components/Checkout/Checkout'
import Footer from './Footer/Footer';




function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:categoryId' element={ <ItemListContainer/>} />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='*' element={ 
            <div className='contenedorError'>
              <img className='error' src={error} alt="No se encuentra la página"/>
            </div>
            }/>
        </Routes>
        <Footer/>
      </CarritoProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
