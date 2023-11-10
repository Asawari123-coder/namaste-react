import RestaurantCard from "./RestaturantCard";
import { resList } from '../utils/mockData'

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Restaurant cards */}
                {
                    resList.map( restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;