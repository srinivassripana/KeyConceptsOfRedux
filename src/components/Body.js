import Restaurent, { WithOpenLabel } from "./Restaurent";
import { useState, useEffect, useContext } from "react";
import Shimmer123456 from "../components/Shimmer123456";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Body rendered:", listOfRes);

  const CardwithOpenLabel = WithOpenLabel(Restaurent);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Oops, there is an internet problem, you are offline</h1>;

  const { LoggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              const filteredlist = listOfRes.filter((res) => res.info.avgRating >= 4);
              setListOfRes(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-2 p-5">
          <label className="bg-green-300 text-black font-semibold p-2 rounded-lg">UserName </label>
          <input
            className="border-black p-2"
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <Shimmer123456 />
      ) : (
        <div className="grid grid-cols-4 gap-8 transition duration-150 ease-out hover:ease-in">
          {listOfRes.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              {restaurant.info.isOpen ? (
                <CardwithOpenLabel resData={restaurant} />
              ) : (
                <Restaurent resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
