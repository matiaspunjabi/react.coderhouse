import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { obtenerUnProducto } from "../../async-mocks";
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    useEffect(()=>{
        obtenerUnProducto(5)
        .then(res => setProducto(res))
        .catch(error=> console.log(error))
    }, [])

    return (
        <div className="itemDetailContainer">
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer;