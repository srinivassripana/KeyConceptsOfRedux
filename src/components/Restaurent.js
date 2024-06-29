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
      <div className="res-cards"> 
          <div  className="res-card">  {/* Individual flexbox for each restaurant */}
            <img
              className="cardimg"
              src={CDN_URL + cloudinaryImageId}
              alt={name}
            />
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Cuisines: {cuisines.join(', ')}</h4>
          </div>
        
      </div>
    );
};

export default Restaurent;