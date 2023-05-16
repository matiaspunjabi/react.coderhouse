import { useState, createContext } from "react";
export const CarritoContext = createContext({carrito:[]});

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)) {
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {
            setCarrito(prev => prev.map((prod) => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            }))
        }
    }
    const eliminarProducto = (id)  => {
        const carritoActualizado = carrito.filter( prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.item.id === id);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}} >
            {children}
        </CarritoContext.Provider>
    )
}
