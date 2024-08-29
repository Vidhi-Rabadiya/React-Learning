import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constant"
const RestaurantMenu = () => {

    const { resId } = useParams()
    const [menuList, setMenuList] = useState([])
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        setMenuList(json)
    }

    if (menuList.length === 0) return null

    const { name, avgRating, costForTwoMessage, cuisines } = menuList?.data?.cards[2]?.card?.card?.info
    const { itemCards } = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return <div className="menu">
        <h1>{name}</h1>
        <div className="restaurantDetails">
            <h3>{avgRating} - {costForTwoMessage}</h3>
            <h4>{cuisines.join(", ")}</h4>
        </div>
        <h3>Menu</h3>
        <ul>
            {itemCards?.map((item) => { return <li key={item.card.info.id}>{item.card.info.name} - {(item.card.info.price || item.card.info.defaultPrice) / 100}</li> })}
        </ul>
    </div>
}

export default RestaurantMenu