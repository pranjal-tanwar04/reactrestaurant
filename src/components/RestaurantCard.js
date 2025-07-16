import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[200px] bg-[#f0f0f0] rounded-lg hover:bg-gray-300"
    >
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <img src={CDN_URL + cloudinaryImageId} alt={name} />
      <h4>{cuisines.join(", ")}</h4>
      <h4>✳️ {avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component

//input - RestrauntCard ==>Restrauntcard promoted

//  export const withPromotedLabel = (RestaurantCard) =>{
//   return(props)=>{
//     return(
//       <div>
//         <label>promoted</label>
//         <RestaurantCard{...props}/>
//       </div>
// )
// }
// }

export default RestaurantCard;
