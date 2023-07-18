import { useState, useContext } from "react";
import useData from "./useData.jsx";
import Venue from "./Venue.jsx";
import { AppContext } from "../Context";

export default function Sidebar(props) {
  const { activeMarker, setActiveMarker } = useContext(AppContext)
  const { venuesDetails } = useData();
  // console.log(typeof activeMarker)
  console.log(activeMarker)

  // const showVenueDetails = () => {

  // }

  // return (
  //   <>
  //     <h1>Sidebar</h1>
  //     <div>
  //     {venuesDetails.map((venue) => {
  //       return (venue)
  //     })
  //    }
  //    </div>
  //   </>
  // );
  return (
    <>
      <h1>Sidebar</h1>
      {activeMarker && (<div>name: {activeMarker.title}</div>)}
      
    </>
  );
}
