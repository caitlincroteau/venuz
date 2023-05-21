import GoogleMapReact from "google-map-react";

export default function MapContainer(props) {
  const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 12,
  };
  return (
    <div>
      <h1>this is a map</h1>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_API,
          language: "en",
        }}
        defaultCenter={this.defaultProps.center}
        center={this.defaultProps.center}
        defaultZoom={this.defaultProps.zoom}
        onChildMouseEnter={this.onChildMouseEnter}
        onChildMouseLeave={this.onChildMouseLeave}
      />
    </div>
  );
}
