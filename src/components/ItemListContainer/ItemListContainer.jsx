import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, where, query} from "firebase/firestore";
import { db } from '../../services/firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const {idCategoria} = useParams();

    useEffect( ()=> {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCategoria", "==", idCategoria)): collection(db, "productos");

        getDocs(misProductos)
            .then(res=> {
                const nuevosProductos = res.docs.map( doc => {
                    setCargando(false);
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <div className='itemListContainer'>
            <h2> Productos </h2>
            {!cargando ? (<ItemList productos={productos} />) : "Cargando Productos..."}
        </div>
    )
}

export default ItemListContainer