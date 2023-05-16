import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/>}/>
            <Route path='/item/:idItem' element={ <ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
