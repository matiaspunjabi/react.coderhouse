import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const logo = "https://res.cloudinary.com/dc1cv19lb/image/upload/v1680114098/Logo_xpkk3r.webp"
const NavBar = () =>{
    return (
        <header>
            <nav>
                <div className="searchCartContainer">
                    <img src={logo} alt="logo dietetica a granel" />
                    <SearchBar/>
                    <CartWidget/>
                </div>
                <ul>
                    <li>ofertas</li>
                    <li>nuevos productos</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;