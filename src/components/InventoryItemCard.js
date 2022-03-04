import React from 'react'

function InventoryItemCard({ item, callbackFn, handleDelete }) {


    return(
        <div className="card" onClick={() => callbackFn(item)}>
            <img src={item.image} alt={item.name} ></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={(event) => handleDelete(event, item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;