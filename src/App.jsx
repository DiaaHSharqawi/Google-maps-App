import { Box } from "@mui/material";
import React, { useState } from "react";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import SideBarToggleButton from "./components/ToggleButton/ToggleButton";
import { citiesCoordinates } from "./data/cityCoordinates";

export default function App() {
  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: citiesCoordinates[0].lat,
    lng: citiesCoordinates[0].lng,
  });

  const [isSideBarVisible, seIsSideBarVisible] = useState(false);

  const toggleSideBarVisibility = () => {
    seIsSideBarVisible(!isSideBarVisible);
  };

  const handleCityClick = (cityCoordinates) => {
    console.log("City clicked:", cityCoordinates);

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
      {isSideBarVisible && (
        <SideBar
          citiesCoordinates={citiesCoordinates}
          handleCityClick={handleCityClick}
        />
      )}

      <Map
        isSideBarVisible={isSideBarVisible}
        citiesCoordinates={citiesCoordinates}
        centerCoordinates={centerCoordinates}
        handleCityClick={handleCityClick}
      />

      <SideBarToggleButton
        isSideBarVisible={!isSideBarVisible}
        toggleSideBarVisibility={toggleSideBarVisibility}
      />
    </Box>
  );
}
