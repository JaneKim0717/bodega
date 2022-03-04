import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({ reorderInventory, onRemoveFromReorder, handleDelete }) {

    const renderReorder = reorderInventory.map((item) => {
        return <InventoryItemCard key={item.id} item={item} callbackFn={onRemoveFromReorder} handleDelete={handleDelete} />
    })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {renderReorder}
            </div>
        </div>
    );
}

export default ReorderInventoryList;