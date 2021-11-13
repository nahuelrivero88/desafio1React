import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <h1 className="itemListContainer"> {greeting} </h1>
        </div>
    )
}
