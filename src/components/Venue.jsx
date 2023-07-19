
export default function Venue(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>{props.capacity}</ul>
      <ul>{props.facility}</ul>
    </div>
  );
}
