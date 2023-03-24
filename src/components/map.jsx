import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
