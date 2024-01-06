import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import RestaurantCard from "./RestaturantCard";
import { resList } from '../utils/mockData'
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
   // State variable : React superPower : it maintains state
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    const onlineStatus = useOnlineStatus();
    
    useEffect(()=>{
        console.log("useEffect called.....");
        fetchData();

    },[]);

    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus=== false){
        return <h1>Check your internet connection</h1>
    }

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
                    listOfRestaurants.map( restaurant =>
                        <Link  key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData={restaurant} />
                        </Link>
                        )
                }
            </div>
        </div>
    )
}

export default Body;