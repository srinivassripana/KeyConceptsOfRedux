import {CDN_URL} from "../utils/constants";

const Restaurent = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating,
        cuisines,

    } = resData?.info;
  
    return (
      <div className=" bg-gray-50 hover:bg-slate-300 cursor-pointer shadow-lg rounded-t-xl transition-shadow"> 
          <div  className=" ">  {/* Individual flexbox for each restaurant */}
            <img
              className=" rounded-t-xl "
              src={CDN_URL + cloudinaryImageId}
              alt={name}
            />
            <h3 className="text-center pt-2 pb-3 font-bold">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Cuisines: {cuisines.join(', ')}</h4>
          </div>
        
      </div>
    );
};

export default Restaurent;