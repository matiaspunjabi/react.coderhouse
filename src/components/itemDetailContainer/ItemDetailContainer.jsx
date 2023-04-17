import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { obtenerUnProducto } from "../../async-mocks";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const {idItem} = useParams();
    useEffect(()=>{
        obtenerUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error=> console.log(error))
    }, [idItem])

    return (
        <div className="itemDetailContainer">
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer;