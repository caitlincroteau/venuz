import Venues from "./Venues";

export default function Venue(props) {
  return (
    <div>
      <ul>{props.name}</ul>
      <ul>{props.country}</ul>
      <ul>{props.capacity}</ul>
    </div>
  );
}
