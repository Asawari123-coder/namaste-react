import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() =>{
        console.log("useEffect");
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null ) return  <Shimmer />;
   const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

   const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

     return (
        <>
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
                <h2>Menu</h2>
                <ul>
                    {
                        itemCards.map((item) => (
                        
                            <li key={item.card.info.name}>{item.card.info.name} - {"Rs."}{(item.card.info.price || item.card.info.defaultPrice) /100 }</li>

                        ))
                    }    
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu;