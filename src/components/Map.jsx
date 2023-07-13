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
import { act } from "react-dom/test-utils";

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

  // const infoBoxOnLoad = (infoBox) => {
  //   console.log("infoBox: ", infoBox);
  // };
  // //infobox options
  // const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };
  useEffect(() => {
    console.log(activeMarker);
  }, [activeMarker]);

  const handleClick = (marker) => {
    setActiveMarker(marker);
  };

  return (
    <div>
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {/* <InfoBoxF
          onLoad={infoBoxOnLoad}
          options={infoBoxOptions}
          visible={true}
          position={activeMarker}>
        </InfoBox> */}

        {markersList.map((marker, index) => {
          return (
            <MarkerF
              position={{
                lat: marker.props.position.lat,
                lng: marker.props.position.lng,
              }}
              key={index}
              // onClick={(position) => {
              //   setActiveMarker(marker.props)
              //   console.log(position)
              // }}
              //sets position and title for use in InfoBox
              onClick={() => {
                handleClick(marker.props);
              }}
              icon={iconStar}
              title={marker.props.title}
            >
              {/* <InfoBoxF position={activeMarker.position} onLoad={onLoad} options={options} closeBoxURL={false}>
               <div style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}>
                  <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                    {activeMarker.title}
                  </div>
              </div>
              </InfoBoxF>     */}
            </MarkerF>
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
