import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import { obtenerProductos, obtenerProductosPorCategoria } from '../../async-mocks';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams()
    
    useEffect(()=>{
        const funcionProductos = idCategoria ? obtenerProductosPorCategoria : obtenerProductos

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    },[idCategoria])
    return (
        <div className="itemListContainer">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;