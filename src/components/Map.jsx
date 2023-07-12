import { GoogleMap, MarkerF, InfoBox } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import useData from "./useData";
import iconStar from "./images/google-map-marker-40x40.png";
import "../globals.css";

export default function Map() {
  const [activeMarker, setActiveMarker] = useState();
  const { venues, setVenues, markersList } = useData();

  const center = useMemo(
    () => ({ lat: 48.42460692730271, lng: -123.35338691883109 }),
    []
  );

  const onLoad = (infoBox) => {
    console.log("infoBox: ", infoBox);
  };
  const options = { closeBoxURL: "", enableEventPropagation: true };

  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      {markersList.map((marker, index) => (
        <MarkerF
          position={{
            lat: marker.props.position.lat,
            lng: marker.props.position.lng,
          }}
          key={index}
          onClick={() => console.log(index)}
          icon={iconStar}
          title={"This is a venue"}
        />
      ))}
      {/* <InfoBox position={center} onLoad={onLoad} options={options}>
        <div style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}>
          <div style={{ fontSize: 16, fontColor: `#08233B` }}>
            Hello, World!
          </div>
        </div>
      </InfoBox> */}
    </GoogleMap>
  );
}

///watch this video for instructions!
//https://www.youtube.com/watch?v=2po9_CIRW7I&t=556s&ab_channel=LeighHalliday
