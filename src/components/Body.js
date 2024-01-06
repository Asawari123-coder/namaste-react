import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import RestaurantCard from "./RestaturantCard";
import { resList } from '../utils/mockData'
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
   // State variable : React superPower : it maintains state
   
   const [listOfRestaurants, setListOfRestaurants] = useState(resList)
   const [searchText, setSearchText] = useState('');
   const onlineStatus = useOnlineStatus();
   const [, setFilteredRestaurants] = useState([]) 
    
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
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button className="px-4 py-2 bg-green-100 m-4"
                        onClick={() =>{
                            console.log(searchText);
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.data.name.toLowerCase().include(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurants)
                        }}

                    >
                        Search
                    </button>    
                </div>
                <div className="flex items-center px-4 m-4 rounded-sm">
                <button 
                className=" px-4 py-2 bg-gray-100"
                onClick={() =>{
                  const filteredRestaurants = listOfRestaurants.filter((res) => res.data.avgRating>4);
                  setListOfRestaurants(filteredRestaurants);
                }}
                >
                    Top Rated Restaurants
                </button>
                </div>
               
            </div>
            <div className="flex flex-wrap">
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