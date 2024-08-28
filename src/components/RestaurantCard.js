import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = ({ info }) => {

    return <div className="restaurantCardContainer">
        <img className="restaurantCardImage" src={IMAGE_URL + info.cloudinaryImageId} alt="image" />
        <h2>{info.name}</h2>
        <h3>{info.avgRating} - {info.sla.slaString} </h3>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.areaName}</h4>
    </div>
}

export default RestaurantCard;