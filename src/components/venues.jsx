import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Test(props) {
  //gives array of all the venue objects in db
  const [venues, setVenues] = useState([]);


  useEffect(() => {
    axios
      .get("/api/venues/")
      .then((response) => {
        //sets the array of venues
        setVenues(response.data)


      })
      .catch((error) => console.log(error));
  }, []);

  // const venue1Name = venues[0].name;


  return (
    <div>
      <h1>Venue 1</h1>
      {/* {venues[0].name} */}
      {/* <div>{venue1Name}</div> */}
      {venues.map((venue) => (
        <div>{venue.name}</div>
      ))}
    </div>
  );
}

//look at helpers/usegardendata to deal with keys

// name: "",
// counrty: "",
// capacity: 0,
// createdAt: "",
// updatedAt: "",
// id: "",