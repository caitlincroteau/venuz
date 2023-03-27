import Venue from "./Venue";

export default function Venues(props) {
  const venues = props.venues.map((venue) => {
    return (
      <Venue
        key={venue.id}
        name={venue.name}
        country={venue.country}
        capacity={venue.capacity}
      />
    );
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
