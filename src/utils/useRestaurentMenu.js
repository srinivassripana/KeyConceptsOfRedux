import { useState ,useEffect } from "react";

const useRestaurentMenu = ()=>{
    const [resInfo ,setResInfo] = useState(null);
    console.log(resInfo);

    useEffect(()=>{
        fetchMenudata();
    },[]);


    const fetchMenudata = async ()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };
    return resInfo;
}
export default useRestaurentMenu;