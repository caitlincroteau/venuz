import { useEffect, useState } from "react";
import axios from "axios";
import { MarkerF } from "@react-google-maps/api";
import Venue from "./Venue";

export default function useData() {
  //gives array of all the venue objects in db
  const [venues, setVenues] = useState([]);
  // console.log(venues);

  useEffect(() => {
    axios
      .get("/api/venues/")
      .then((response) => {
        //sets the array of venues
        setVenues(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const generateMarkers = () => {
    return venues.map((venue) => {
      return (
        <MarkerF
          title={venue.name}
          position={{ lat: venue.lat, lng: venue.lng }}
        />
      );
    });
  };

  const markersList = generateMarkers();

  const generateVenueDetails = () => {
    return venues.map((venue) => {
      return (
        <Venue name={venue.name} capacity={venue.capacity} facility={venue.facility} key={venue.id}/>
      );
    });
  };

  const venueDetails = generateVenueDetails();

  return { venues, setVenues, markersList, venueDetails };
}

//venues is an array
