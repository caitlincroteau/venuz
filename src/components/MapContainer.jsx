import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../globals.css';

export default function MapContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={13}
      center={{ lat: 48.42460692730271, lng: -123.35338691883109 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}

//https://github.com/google-map-react/google-map-react
//https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a

//if I want to use this package, there is an issue with the markers moving, so
//I would need to install this other package :/
//https://github.com/giorgiabosello/google-maps-react-markers

//google-map-react package
// const [state, setState] = useState({
//   center: { lat: 48.42460692730271, lng: -123.35338691883109 },
//   zoom: 13,
// });

// const defaultProps = {
//   center: { lat: 48.42460692730271, lng: -123.35338691883109 },
//   zoom: 13,
// };

// return (
//   //always set the container height explicitly
//   <div style={{ height: 500, width: 500, margin: "auto", marginTop: 40 }}>
//     <GoogleMapReact
//       className="react-map"
//       bootstrapURLKeys={{
//         key: process.env.REACT_APP_GOOGLE_MAPS_API,
//         language: "en",
//       }}
//       defaultCenter={defaultProps.center}
//       defaultZoom={defaultProps.zoom}
//       // center={state.center}
//       // onChange={({center, zoom}) => {setState({center: center, zoom: zoom})}}
//     >
//       <Marker
//         lat={48.42357520305364}
//         lng={-123.36235913171413}
//         text="Royal Theatre"
//       />
//     </GoogleMapReact>
//   </div>
// );