import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {

    const handleClick = () => {
        setShowItems()
    }
    return (
        <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg">
            <div className="p-4 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;