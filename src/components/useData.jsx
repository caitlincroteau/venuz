import { useEffect, useState } from "react";
import axios from "axios";

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

  return { venues, setVenues };
}
