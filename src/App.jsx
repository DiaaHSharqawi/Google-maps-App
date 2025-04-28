import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import Map from "./components/Map/Map";
import SideBar from "./components/SideBar/SideBar";
import SideBarToggleButton from "./components/ToggleButton/ToggleButton";

export default function App() {
  const cityCoordinates = [
    { lat: 31.7683, lng: 35.2137, text: "Jerusalem" },
    { lat: 31.9522, lng: 35.2332, text: "Ramallah" },
    { lat: 32.2211, lng: 35.2544, text: "Nablus" },
    { lat: 31.7054, lng: 35.2024, text: "Bethlehem" },
    { lat: 31.5326, lng: 35.0998, text: "Hebron" },
    { lat: 32.4597, lng: 35.3009, text: "Jenin" },
    { lat: 31.5, lng: 34.4667, text: "Gaza" },
    { lat: 31.8996, lng: 35.2042, text: "Jericho" },
    { lat: 32.0833, lng: 35.1833, text: "Tulkarm" },
    { lat: 32.2833, lng: 35.0167, text: "Qalqilya" },
  ];

  const [showSideBar, setShowSideBar] = useState(false);

  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: cityCoordinates[0].lat,
    lng: cityCoordinates[0].lng,
  });

  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleCityClick = (event, city) => {
    console.log(event);
    console.log(city);

    const { lat, lng } = city;
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
      {showSideBar && (
        <SideBar
          cityCoordinates={cityCoordinates}
          onCityClick={handleCityClick}
        />
      )}

      <Box
        sx={{
          flexGrow: 1,
          width: showSideBar ? "calc(100% - 450px)" : "100%",
          height: "100%",
          transition: "all 0.3s ease",
        }}
      >
        <Map
          cityCoordinates={cityCoordinates}
          centerCoordinates={{
            lat: centerCoordinates.lat,
            lng: centerCoordinates.lng,
          }}
          onCityClick={handleCityClick}
        />
      </Box>

      <SideBarToggleButton
        showSideBar={!showSideBar}
        handleToggleSideBar={handleToggleSideBar}
        centerCoordinates={centerCoordinates}
        setCenterCoordinates={setCenterCoordinates}
      />
    </Box>
  );
}
