import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import classes from "./MapSection.module.scss";
import mapStyles from "./mapStyles";

export const MapSection = () => {
  const map = () => {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 50.064651, lng: 19.944981 }}
        defaultOptions={{ styles: mapStyles }}
      ></GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(map));

  return (
    <section id="map" style={{ height: "500px", width: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </section>
  );
};
