import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({ reorderInventory, removeFromReorder, handleDelete }) {


    const renderReorderInventory = reorderInventory.map((item) => {
        return (
            <InventoryItemCard 
                key={item.id} 
                item={item} 
                callbackFn={removeFromReorder}
                handleDelete={handleDelete}
            />
        )
    })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {renderReorderInventory}
            </div>
        </div>
    );
}

export default ReorderInventoryList;