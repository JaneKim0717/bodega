import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList( { inventory, onAddToReorder, handleDelete }) {

    const renderInventory = inventory.map((item) => {
        return <InventoryItemCard 
            key={item.id} 
            item={item} 
            callbackFn={onAddToReorder} 
            handleDelete={handleDelete}
        />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {renderInventory}
            </div>
        </div>
    );
}

export default CurrentInventoryList;