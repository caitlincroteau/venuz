import { useState, useContext, useEffect } from "react";
import useData from "./useData.jsx";
import Venue from "./Venue.jsx";
import { AppContext } from "../Context";

export default function Sidebar(props) {
  const {
    activeMarker,
    setActiveMarker,
    activeVenue,
    setActiveVenue,
    markersList,
    venuesList,
  } = useContext(AppContext);

  useEffect(() => {
    console.log(activeVenue);
  }, [activeVenue]);

  return (
    <>
      <h1>Sidebar</h1>
      {activeVenue && activeVenue.name}
      {/* {activeMarker && <div>name: {venueDetails.props[activeMarker.title]}</div>} */}
      {/* {activeMarker && (
        <Venue
          name={activeVenue.name}
          capacity={activeVenue.capacity}
          facility={activeVenue.facility}
        />
      )} */}
    </>
  );
}
