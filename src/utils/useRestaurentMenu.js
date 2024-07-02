import { useState ,useEffect } from "react";

const useRestaurentMenu = ()=>{
    const [resInfo ,setResInfo] = useState(null);
    console.log(resInfo);

    useEffect(()=>{
        fetchMenudata();
    },[]);


    const fetchMenudata = async ()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.624480699999999&restaurantId=229&submitAction=ENTER");
        
        const json = await data.json();

        setResInfo(json.data);
    };
    console.log(resInfo);
    return resInfo;
}
export default useRestaurentMenu;