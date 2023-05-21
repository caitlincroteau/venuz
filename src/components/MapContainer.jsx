import GoogleMapReact from "google-map-react";

export default function MapContainer(props) {
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12,
  };
  return (
    //always set the container height explicitly
    <div style={{ height: "50vh", width: "50%" }}>
      <h1>this is a map</h1>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        // center={this.defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // onChildMouseEnter={this.onChildMouseEnter}
        // onChildMouseLeave={this.onChildMouseLeave}
      />
    </div>
  );
}
