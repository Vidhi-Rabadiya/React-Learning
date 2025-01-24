import { ITEM_IMAGE_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    return <div>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className="flex justify-between items-center px-4 py-8 border-b-2">
                <div className="text-left w-10/12 pr-4">
                    <p className="font-bold">{item?.card?.info?.name}</p>
                    <p className="font-semibold">₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</p>
                    <p className="text-sm line-clamp-2">{item?.card?.info?.description}</p>
                </div>
                <div className="w-2/12">
                    <img className="w-28 rounded-lg" src={ITEM_IMAGE_URL + item?.card?.info?.imageId} />
                </div>
            </div>
        ))}
    </div>
}

export default ItemList;