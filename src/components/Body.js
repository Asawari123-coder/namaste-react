import RestaurantCard from "./RestaturantCard";
import { resList } from '../utils/mockData'
import { useState } from "react";

const Body = () => {
    // State variable : React superPower : it maintains state
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={() =>{
                   console.log("Button Clicked..."); 
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* Restaurant cards */}
                {
                    listOfRestaurants.map( restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;