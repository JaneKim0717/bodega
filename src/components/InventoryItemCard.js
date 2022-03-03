import React from 'react'

function InventoryItemCard({ item, callbackFn, handleDelete }) {

    const {image, name, price} = item

    return(
        <div className="card" onClick={() => callbackFn(item)}>
            <img src={image} alt={name} ></img>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button onClick={(event) => handleDelete(event, item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;