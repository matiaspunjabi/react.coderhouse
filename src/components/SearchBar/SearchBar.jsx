import "./SearchBar.css"
const SearchBar = () => {
    return (
        <div className="searchBar">
            <input type="text" placeholder="¿Qué quiere buscar?" />
            <button>buscar</button>
        </div>
    )
}

export default SearchBar;