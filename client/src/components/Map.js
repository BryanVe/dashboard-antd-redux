import React from "react";
import { GoogleMap } from "@react-google-maps/api";

function MapTesting({ width = "100%", height = "400px", children }) {
  return (
    <div style={{ width, height }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        id="example-map"
        zoom={12}
        center={{
          lat: -12.046373,
          lng: -77.042755,
        }}
      >
        {children}
      </GoogleMap>
    </div>
  );
}

export default MapTesting;
