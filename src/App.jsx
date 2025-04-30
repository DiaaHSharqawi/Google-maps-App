import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import { citiesCoordinates } from "./data/cityCoordinates";

import { MapProvider } from "./context/MapContext";

export default function App() {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: citiesCoordinates[0].lat,
    lng: citiesCoordinates[0].lng,
  });

  const handleCityClick = (cityCoordinates) => {
    console.log("City coordinates clicked:", cityCoordinates);
    const { lat, lng } = cityCoordinates;
    setCenterCoordinates({
      lat: lat,
      lng: lng,
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {!isMapExpanded && (
        <SideBar
          citiesCoordinates={citiesCoordinates}
          handleCityClick={handleCityClick}
        />
      )}

      <MapProvider
        isMapExpanded={isMapExpanded}
        setIsMapExpanded={setIsMapExpanded}
      >
        <Map
          citiesCoordinates={citiesCoordinates}
          centerCoordinates={centerCoordinates}
          handleCityClick={handleCityClick}
        />
      </MapProvider>
    </Box>
  );
}
1;
