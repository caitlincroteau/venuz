import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Test(props) {
  const [venue, setVenue] = useState({});

  useEffect(() => {
    axios
      .get("localhost:3000/venues/640ac0eee5f0c548ba3b3db9")
      .then((response) => {
        setVenue(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Venue 1</h1>
      <p>${venue}</p>
    </div>
  );
}
