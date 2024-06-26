import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resList } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resList?.info;
  return (
    <div className="m-4 p-4 w-56 h-[450px] bg-green-50 rounded-2xl hover:bg-green-100">
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaurantCard;
