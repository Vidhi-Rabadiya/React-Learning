import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = ({ info }) => {
    return <div className="m-4 p-4 bg-gray-100 w-60 rounded-lg">
        <img className="rounded-lg" src={IMAGE_URL + info.cloudinaryImageId} alt="image" />
        <h2 className="font-bold py-4 text-lg">{info.name}</h2>
        <h3>{info.avgRating} - {info.sla.slaString} </h3>
        <h4>{info.cuisines.join(", ")}</h4>
        <h4>{info.areaName}</h4>
    </div>
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-gray-700 text-white absolute rounded-lg p-2 m-2 font-bold">promated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;