import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return (
        <div className="greetingContainer">
            <h2>{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer;