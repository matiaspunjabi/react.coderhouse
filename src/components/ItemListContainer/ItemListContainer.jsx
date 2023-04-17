import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { obtenerProductos } from '../../async-mocks';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
      obtenerProductos()
        .then(res => setProductos(res))
        .catch(error => console.log(error))
    },[])

    return (
        <div className="itemListContainer">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;