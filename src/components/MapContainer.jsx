import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default function MapContainer(props) {
  const defaultProps = {
    center: { lat: 48.42460692730271, lng: -123.35338691883109 },
    zoom: 13,
  };
  return (
    //always set the container height explicitly
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={48.42357520305364}
          lng={-123.36235913171413}
          text="Royal Theatre"
        />
      </GoogleMapReact>
    </div>
  );
}

//https://github.com/google-map-react/google-map-react
//https://levelup.gitconnected.com/google-map-react-beginners-guide-85bb1a94b04a
