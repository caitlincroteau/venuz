import { useState, useContext } from "react";
import useData from "./useData.jsx";
import Venue from "./Venue.jsx";
import { AppContext } from "../Context";

export default function Sidebar(props) {
  const { activeMarker, venueDetails } = useContext(AppContext);
  console.log(venueDetails)
 

  return (
    <>
      {/* <h1>Sidebar</h1>
      {activeMarker && <div>name: {venueDetails.props.name}</div>} */}
      {venueDetails}
    </>
  );
}
