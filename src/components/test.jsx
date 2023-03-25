import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Test(props) {
  const [venues, setVenues] = useState({});

  useEffect(() => {
    axios
      .get("/api/venues/")
      .then((response) => {
        setVenues(response.data);
        console.log("data", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Venue 1</h1>
      {/* {venues[0].name} */}
      {venues.map((venue) => (
        <div>{venue.name}</div>
      ))}
    </div>
  );
}

//look at helpers/usegardendata to deal with keys
