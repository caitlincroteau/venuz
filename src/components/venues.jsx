import Venue from "./Venue";
//lists all the venues

export default function Venues(props) {
  const venues = props.venues.map((venue) => {
    return <Venue key={venue.id} name={venue.name} capacity={venue.capacity} />;
  });

  return <ul>{venues}</ul>;
}

//look at helpers/usegardendata to deal with keys

// name: "",
// counrty: "",
// capacity: 0,
// createdAt: "",
// updatedAt: "",
// id: "",
