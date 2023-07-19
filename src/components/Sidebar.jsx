import { useState, useContext, useEffect } from "react";
import useData from "./useData.jsx";
import Venue from "./Venue.jsx";
import { AppContext } from "../Context";

export default function Sidebar(props) {
  const { activeMarker, venues } = useContext(AppContext);
  const [activeVenue, setActiveVenue] = useState({});

  // const showActiveVenue = () => {
  //     for (let venue in venues) {
  //       if (activeMarker.title === venues[venue].name) {
  //         // setActiveVenue(venues[venue]);
  //         console.log(activeVenue)
          
  //       } 
  //     }
  //   return (<Venue name={activeVenue.title}></Venue>);
  // };
  const matchVenueToMarker = () => {
    if(activeMarker) {
      for(let venue in venues) {
        if(venues[venue]["name"] === activeMarker.title) {
          setActiveVenue(venues[venue])
        }
      }

    }
    
    console.log(activeVenue)
  }

  matchVenueToMarker()

  useEffect(() => {
    console.log(activeVenue);
  }, [activeVenue]);

  return (
    <>
      <h1>Sidebar</h1>
      {/* {activeMarker && <div>name: {venueDetails.props[activeMarker.title]}</div>} */}
     
    </>
  );
}
