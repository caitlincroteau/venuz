import {
  GoogleMap,
  MarkerF,
  InfoBoxF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import useData from "./useData";
import iconStar from "./images/google-map-marker-40x40.png";
import "../globals.css";

export default function Map(props) {
  const [activeMarker, setActiveMarker] = useState({});
  const { venues, setVenues, markersList } = useData();

  const mapRef = useRef();
  // ensure map doesn't jump back to og center coordinates
  // tells react to generate the values once, and resuse the value unless one of the dependencies changes.
  const center = useMemo(
    () => ({ lat: 48.42460692730271, lng: -123.35338691883109 }),
    []
  );
  const options = useMemo(
    () => ({
      mapId: "b8a2cff449ba39a1",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  useEffect(() => {
    console.log(activeMarker);
  }, [activeMarker]);

  const handleClick = (marker) => {
    setActiveMarker(marker);
    // handleInfoWindow();
  };

  // const handleInfoWindow = () => {
  //   setInfoWindow(!infoWindow);
  // }

  return (
    <div>
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {markersList.map((marker, index) => {
          return (
            <MarkerF
              position={{
                lat: marker.props.position.lat,
                lng: marker.props.position.lng,
              }}
              key={index}
              onClick={() => {
                handleClick(marker.props);
              }}
              icon={iconStar}
              title={marker.props.title}
            ></MarkerF>
          );
        })}
      </GoogleMap>
    </div>
  );
}

///watch this video for instructions!
//https://www.youtube.com/watch?v=2po9_CIRW7I&t=556s&ab_channel=LeighHalliday

//   <InfoWindowF position={activeMarker}>
//   <div
//     style={{backgroundColor: "pink"}}
//     >
//       <h2>{marker.props.title}</h2>
//     </div>

// </InfoWindowF>
