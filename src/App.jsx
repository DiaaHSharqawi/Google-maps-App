import React, { useState } from "react";

import Map from "./components/Map/Map";

export default function App() {
  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const [zoom, setZoom] = useState(12);

  return (
    <>
      <Map center={centerCoordinates} zoom={zoom} />
    </>
  );
}
