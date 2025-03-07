import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData.info;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: "#f0f0f0",
            }}
        >
            <img
                className="res-logo"
                src={LOGO_URL
                    +
                    cloudinaryImageId
                }
                alt="Biryani"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;