import { useEffect, useState } from "react";
import axios from "axios";
import { MarkerF } from "@react-google-maps/api";

export default function useData() {
  //gives array of all the venue objects in db
  const [venues, setVenues] = useState([]);

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
          id={venue._id}
        />
      );
    });
  };

  const markersList = generateMarkers();

  const setVenuesById = () => {
    let byId = {};
    for (let venue of venues) {
      byId[venue._id] = venue;
    }
    return byId;
  };

  const venuesList = setVenuesById();

  return { markersList, venuesList };
}

//venues is an array
//venuesList is an object
