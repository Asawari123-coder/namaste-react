import RestaurantCard from "./RestaturantCard";
import { resList } from '../utils/mockData'
import { useEffect, useState } from "react";

const Body = () => {
    // State variable : React superPower : it maintains state
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    // useEffect(()=>{
    //     console.log("useEffect called.....");
    //     fetchData();

    // },[]);

    
    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    //     const json = data.json();
    //     console.log(json);
    //    // setListOfRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    return (
        <div className="body">
            {/* <div className="filter">
                <button 
                className="filter-btn"
                onClick={() =>{
                   console.log("Button Clicked..."); 
                }}
                >
                    Top Rated Restaurants
                </button>
            </div> */}
            <div className="res-container">
                {/* Restaurant cards */}
                {/* {
                    listOfRestaurants.map( restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                } */}
            </div>
        </div>
    )
}

export default Body;