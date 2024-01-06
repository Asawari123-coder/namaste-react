import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const  { resData } = props;
    const  {name, cuisines,avgRatingString, costForTwo, cloudinaryImageId} = resData.info
    const { deliveryTime } =resData.info.sla
     return (
         <div className="m4 p-4 w-[256px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
             <img alt="Res logo" className="rounded-lg" 
             src={CDN_URL + cloudinaryImageId}/> 
             <h3 className="font-bold py-4 text-lg">{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRatingString}</h4>
             <h4>{deliveryTime}</h4>
             <h4>{costForTwo}</h4>
         </div> 
     )
 }
export default RestaurantCard; 