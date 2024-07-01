
import Shimmer123456 from "./Shimmer123456";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = ()=>{
    const resInfo = useRestaurentMenu();
    
     const {name , costForTwo ,cuisines , avgRating} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    return resInfo === null ? (<Shimmer123456/>):(
        <div className="MenuList">
            <h1>{name}</h1>
            <h3>{costForTwo}</h3>
            <h3>{cuisines.join(" ,")}</h3>
            <h3>{avgRating}</h3>
            <br></br>
            <h2>Lets see The type of dishes</h2>
            <ul>
                <li>Biryani</li>
                <li>Biryani</li>
                <li>Biryani</li>
            </ul>
        </div>
    );
};

export default RestaurentMenu;
//restaurent = {resInfo?.cards[1]?.card?.card?.getElements?.infoWithStyle?.restaurants[3]?.info?.name}