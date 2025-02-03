import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  let [ resList, setResList ] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>

      <button onClick={() => {
        resList = resList.filter(
          (restaurant) => restaurant.info.avgRating > 4.5
        );
        setResList(resList);
        console.log(resList);
      }}>
        <i className="fas fa-filter"></i> Filter
      </button>
      <div className="res-container">
        {
        resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
