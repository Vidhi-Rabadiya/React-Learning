import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constant"
import useRestaurantMenu from "../utils/useRastautantMenu"
import RestaurantCategory from "./RestaurantCategory"
const RestaurantMenu = () => {

    const { resId } = useParams()
    const [showItems, setShowItems] = useState(null);

    // const [menuList, setMenuList] = useState([])
    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId)
    //     const json = await data.json()
    //     setMenuList(json)
    // }

    const menuList = useRestaurantMenu(resId)
    if (menuList === null) return null

    const { name, avgRating, costForTwoMessage, cuisines } = menuList?.data?.cards[2]?.card?.card?.info
    const { itemCards } = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categories = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <div className="restaurantDetails">
                <h3 className="font-semibold text-lg">{avgRating} - {costForTwoMessage}</h3>
                <h4 className="font-semibold">{cuisines.join(", ")}</h4>
            </div>
            {categories.map((category, index) => {
                return <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={showItems == index ? true : false}
                    setShowItems={() => {
                        showItems == index ?
                            setShowItems(null) :
                            setShowItems(index)
                    }}
                />
            })}
            {/* <ul>
                {itemCards?.map((item) => { return <li key={item.card.info.id}>{item.card.info.name} - {(item.card.info.price || item.card.info.defaultPrice) / 100}</li> })}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu