import {CDN_URL} from "../utils/constants";
const ItemsList =({items})=>{
    console.log(items);
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className=" flex justify-between m-1 text-left  box-border w-11.8/12 p-4 border-2 shadow-lg rounded-md">
                    
                    <div className="w-9/12">
                    <div>
                    <span className="text-black">{item.card.info.name}</span>
                    <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div className="absolute">
                        <button className="bg-black text-white p-2 shadow-lg rounded-md mx-[50%]">Add+</button>
                    </div>
                    <img  className=" w-[120px] rounded-md" src={CDN_URL+item?.card?.info?.imageId}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemsList;