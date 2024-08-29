import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurantCardList, setRestaurantCardList] = useState([])
    useEffect(() => {
        console.log("rendered")
        getListData();
    }, [])
    const getListData = async () => {
        const list = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.003922&lng=72.54606869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const listData = await list.json();
        setRestaurantCardList(listData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (restaurantCardList?.length === 0) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <button className="topRatedButton" onClick={() => {
            const list = restaurantCardList.filter((card) => card.info.avgRating > 4.5)
            setRestaurantCardList(list)
        }}>top rated restaurants</button>
        <div className="mainContainer">
            {
                restaurantCardList?.map((rest) => {
                    return <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}> <RestaurantCard info={rest.info} /></Link>
                })
            }
        </div>
    </div>
}

export default Body;