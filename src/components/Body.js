import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurantCardList, setRestaurantCardList] = useState([])
    useEffect(() => {
        getListData();
    }, [])
    const getListData = async () => {
        const list = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.003922&lng=72.54606869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const listData = await list.json();
        setRestaurantCardList(listData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const PromatedRestaurantCard = withPromotedLabel(RestaurantCard);
    if (restaurantCardList?.length === 0) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <button className="bg-blue-500 p-2 m-4 rounded-lg" onClick={() => {
            const list = restaurantCardList.filter((card) => card.info.avgRating > 4.5)
            setRestaurantCardList(list)
        }}>top rated restaurants</button>
        <div className="flex flex-wrap">
            {
                restaurantCardList?.map((rest) => {
                    return <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}> <PromatedRestaurantCard info={rest.info} /></Link>
                })
            }
        </div>
    </div>
}

export default Body;