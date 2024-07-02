
import Shimmer123456 from "./Shimmer123456";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { MENU_API } from "../utils/constants";

const RestaurentMenu = ()=>{
    const [resInfo ,setResInfo] = useState(null);
    console.log(resInfo);
    const {resId} = useParams();
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
     if(resInfo === null ) return (<Shimmer123456/>);
     const {  name ,costForTwo , city ,avgRating ,cuisines}= resInfo?.cards[2]?.card?.card?.info ;
     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card ;
     console.log(itemCards);
     return  (
        <div className="text-black ">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h3>{avgRating}</h3>
            <h4>{costForTwo}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h2>Lets see The type of dishes</h2>
            <ul>
                {itemCards.map((item)=>(<li key = {item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>))}
                <li>Biryani</li>
                <li>Biryani</li>
                <li>Biryani</li>
            </ul>
        </div>
    );
};

export default RestaurentMenu;
//restaurent = {resInfo?.cards[1]?.card?.card?.getElements?.infoWithStyle?.restaurants[3]?.info?.name}