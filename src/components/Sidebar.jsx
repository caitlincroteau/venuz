import { useState } from "react";
import useData from "./useData.jsx";
import Venue from "./Venue.jsx";

export default function Sidebar(props) {
  const [activeVenue, setActiveVenue] = useState();
  const { venuesDetails } = useData();

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
      <Venue></Venue>
    </>
  );
}
