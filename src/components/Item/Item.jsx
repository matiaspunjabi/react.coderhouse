import "./Item.css"

const Item = ({nombre, precio, img, id}) => {
    return (
        <div className="itemContainer" key={id}>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <h2>${precio}</h2>
            <button>Ver detalles</button>
        </div>
    )
}

export default Item