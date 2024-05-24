import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className=" py-4 mx-[22rem] w-1/2 text-center">
      <div className="font-bold text-xl">{name}</div>
      <div className="p-4 m-4 bg-green-100 rounded-lg shadow-lg shadow-black ">
        <div className=" py-2 font-bold text-left">
          ⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </div>

        <div className="text-green-700 font-bold text-left">
          {cuisines.join(", ")}
        </div>
        <div className="text-gray-500 text-left p-2">🚲 {sla.slaString}</div>
      </div>
      <div>
        <div className="m-8 p-4 font-sans font-extrabold bg-gray-200 rounded-2xl">
          ----Menu----
        </div>
        <div className="mx-4 p-4 bg-green-100 rounded-lg shadow-lg shadow-black">
          <ul>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
