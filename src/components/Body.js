import Restaurent from "./Restaurent";
import resList from "../utils/mockData.js";
import { useState } from "react";
const Body = () => {

  const [Listofres,setListofres] = useState(resList);

    return (
       <div className="body">
         <div className="filter">
          <button 
            className="filter-btn" 
            onClick={() =>{
              const filteredlist = Listofres.filter((res) => res.info.avgRating >= 4 );
              setListofres(filteredlist);
          }}>Button</button>
         </div>
         <div className="restaurentMenu">
           {Listofres.map((restaurent, index) =>(
            <Restaurent key={restaurent.info.id} resData ={restaurent}/>
           ))}
         </div>
       </div>
    );
};

export default Body;