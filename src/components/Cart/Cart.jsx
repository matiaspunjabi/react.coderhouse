import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito </h2>
                <Link to='/'> Productos </Link>

            </>
        )
    }

    return (
        <main>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <div className="btnContainer">
                <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link to='/'><button>Seguir Comprando</button></Link>
                <Link to='/checkout'><button>Finalizar Compra</button></Link>
            </div>
        </main>
    )
 
}

export default Cart