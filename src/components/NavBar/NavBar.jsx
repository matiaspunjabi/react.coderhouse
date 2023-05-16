import {Link, NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const logo = "https://res.cloudinary.com/dc1cv19lb/image/upload/v1680114098/Logo_xpkk3r.webp"
const NavBar = () =>{
    return (
        <header>
            <nav>
                <div className="searchCartContainer">
                    
                    <Link to={"/"}><img src={logo} alt="logo dietetica a granel" /></Link>
                    <SearchBar/>
                    <CartWidget/>
                </div>
                <ul>
                    <NavLink to={'/categoria/1'}><li>frutos secos</li></NavLink>
                    <NavLink to={'/categoria/2'}><li>proximamente</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;