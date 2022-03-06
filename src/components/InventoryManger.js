import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorderInventory, setReorderInventory] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
        .then(response => response.json())
        .then(inventory => setInventory(inventory))
    },[])

    function addToReorder(item) {
        if(!reorderInventory.includes(item))
        setReorderInventory([...reorderInventory, item])
    }

    function removeFromReorder(item) {
        const filterReorder = reorderInventory.filter((reorderItem) => reorderItem !== item)
        setReorderInventory(filterReorder)
    }

    function handleDelete(event, item) {
        event.stopPropagation()
        fetch(`http://localhost:8001/inventory/${item.id}`, {method: "DELETE"})

        const newInventory = inventory.filter((inventoryItem) => inventoryItem !== item)
        setInventory(newInventory)

        const filterReorder = reorderInventory.filter((reorderItem) => reorderItem !== item)
        setReorderInventory(filterReorder)
    }

    return(
        <div className="container">
            <CurrentInventoryList 
                inventory={inventory} 
                onAddToReorder={addToReorder}
                handleDelete={handleDelete}
            />
            <ReorderInventoryList 
                reorderInventory={reorderInventory} 
                onRemoveFromReorder={removeFromReorder}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default InventoryManager;