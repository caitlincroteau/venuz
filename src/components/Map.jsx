import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import {
  useMemo,
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext,
} from "react";
import useData from "./useData";
import iconStar from "./images/google-map-marker-40x40.png";
import { AppContext } from "../Context";

export default function Map(props) {
  const {
    activeMarker,
    setActiveMarker,
    activeVenue,
    setActiveVenue,
    markersList,
    venuesList,
  } = useContext(AppContext);
  const [infoWindowVisibility, setInfoWindowVisibility] = useState(false);
  const [infoWindowContent, setInfoWindowContent] = useState(null);

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

  //can customize this later:
  // const divStyle = {
  //   background: `white`,
  //   border: `1px solid #ccc`,
  //   padding: 15,
  // };

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const infoOnLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };

  useEffect(() => {
    // console.log(activeMarker);
  }, [activeVenue]);

  const handleClick = (marker) => {
    // setActiveMarker(marker);
    setActiveVenue(venuesList[marker.id]);
    //centers map on clicked marker
    mapRef.current?.panTo(marker.position);
    const lat = venuesList[marker.id].lat;
    const lng = venuesList[marker.id].lng;
    const position = {lat, lng};
    const name = venuesList[marker.id].name

    setInfoWindowContent({position, name});
    setInfoWindowVisibility(true);
  };

  const handleInfoClose = () => {
    setInfoWindowVisibility(false);
  };

  return (
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
            id={marker.props.id}
            key={index}
            onClick={() => {
              handleClick(marker.props);
            }}
            icon={iconStar}
            title={marker.props.title}
          ></MarkerF>
        );
      })}
      {infoWindowVisibility && (
        <InfoWindowF
          position={infoWindowContent.position}
          onLoad={infoOnLoad}
          onCloseClick={handleInfoClose}
        >
          <div>
            <h4>{infoWindowContent.name}</h4>
          </div>
        </InfoWindowF>
        //^this checks window visibility. if clicked on during handleClick function, this infoBox will appear
      )}
    </GoogleMap>
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

//https://stackoverflow.com/questions/62369859/google-maps-infowindow-reactjs
//^^ this gives infor on having only ONE infobox open at a time
//big issue was that I was trying to render this inside the markerList map function which was causing ALL the venues infoboxes to appear and all with the activeMaker title
//moving the infowindow OUTSIDE of this function solved the problem. woo!
