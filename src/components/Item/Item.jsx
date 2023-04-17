import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({nombre, precio, img, id}) => {
    return (
        <div className="itemContainer" key={id}>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <h2>${precio}</h2>
            <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
        </div>
    )
}

export default Item