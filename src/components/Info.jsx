import { InfoBoxF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";

export default function Info(props) {
  const [infoWindow, setInfoWindow] = useState(false);
  const infoOnLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };
  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };
  // //infobox options
  // const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };

  return (
    <InfoWindowF
      // selectedPlace={null}
      // position={activeMarker.position}
      // anchor={marker.props.position}
      onLoad={infoOnLoad}
    >
      <div style={divStyle}>{/* <h1>{activeMarker.title}</h1> */}</div>
    </InfoWindowF>
  );
}

//   /* <InfoBoxF position={activeMarker.position} onLoad={onLoad} options={options} closeBoxURL={false}>
//                <div style={{ backgroundColor: "yellow", opacity: 0.75, padding: 12 }}>
//                   <div style={{ fontSize: 16, fontColor: `#08233B` }}>
//                     {activeMarker.title}
//                   </div>
//               </div>

//               </InfoBoxF>     */
// }

//         {/* <InfoBoxF
//           onLoad={infoBoxOnLoad}
//           options={infoBoxOptions}
//           visible={true}
//           position={activeMarker}>
//         </InfoBox> */}
