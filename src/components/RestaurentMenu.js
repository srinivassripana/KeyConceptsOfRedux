
import Shimmer123456 from "./Shimmer123456";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { MENU_API } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = ()=>{
    const [resInfo ,setResInfo] = useState(null);
    
    const {resId} = useParams();

    useEffect(()=>{
        fetchdata();
    },[])

    const [showIndex , setShowIndex] = useState(0);

    const fetchdata = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        
        setResInfo(json.data);
    }
     if(resInfo === null ) return (<Shimmer123456/>);
     const {  name ,costForTwo  ,cuisines}= resInfo?.cards[2]?.card?.card?.info ;
     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card ;
     const catrgories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]);
     
     return  (
        <div className="text-center">
            <h1 className="font-bold text-lg">{name}</h1>
            <p>
            {cuisines.join(", ")}-{costForTwo}
            </p>
            {catrgories.map((c,index)=>(<RestaurentCategory key={c?.card?.card.title} 
            data = {c?.card?.card}
            showItems = {index === showIndex ? true : false} 
            setShowIndex={() => setShowIndex(index)} />))};
        </div>
    );
};

export default RestaurentMenu;
//restaurent = {resInfo?.cards[1]?.card?.card?.getElements?.infoWithStyle?.restaurants[3]?.info?.name}