import "./ItemDetail.css"

const ItemDetail = ({nombre, precio, id, img}) => {
    return (
        <>
            <img src={img} alt={nombre} />
            <div>
                <h2>{nombre}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non consequuntur nemo nam, at harum, quae dolor consectetur...</p>
                <h3>${precio}</h3>
                <button>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemDetail;