import Restaurent from "./Restaurent";
import { useState , useEffect } from "react";
import Shimmer123456 from "../components/Shimmer123456";
const Body = () => {

  const [listOfRes ,setListOfRes] = useState([]);
  
  useEffect(
    ()=>{
       fetchdata();
    }, []
  );
  

  const fetchdata = async()=>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 
    const json = await data.json();
    setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRes);
};
  if(!listOfRes?.length){
    return (
      <div className="body">
        <div className="filter">
         <button 
           className="filter-btn" 
           onClick={() =>{
             const filteredlist = listOfRes.filter((res) => res.info.avgRating >= 4 );
             setListOfRes(filteredlist);
         }}>Button</button>
        </div>
        <div className="restaurentMenu">
          {listOfRes.map((restaurent, index) =>(
           <Restaurent key={restaurent.info.id} resData ={restaurent}/>
          ))}
        </div>
      </div>
   );
  }

  return <Shimmer123456/>;
    
};

export default Body;