import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import MapViewToggleButton from "../MapViewToggleButton/MapViewToggleButton";

const VITE_GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

function Map({ centerCoordinates, citiesCoordinates, handleCityClick }) {
  const [zoom] = useState(12);

  return (
    <>
      {citiesCoordinates.length > 0 ? (
        <Box
          sx={{
            height: "100vh",
            flexGrow: 6,
            transition: "all 0.3s ease",
            position: "relative",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: VITE_GOOGLE_MAP_API_KEY }}
            center={centerCoordinates}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              citiesCoordinates.forEach((city) => {
                const marker = new maps.Marker({
                  position: { lat: city.lat, lng: city.lng },
                  map,
                  title: city.text,
                });
                marker.addListener("click", (e) => {
                  const lat = e.latLng.lat();
                  const lng = e.latLng.lng();

                  handleCityClick({
                    lat: lat,
                    lng: lng,
                  });
                });
              });
            }}
          />

          <MapViewToggleButton />
        </Box>
      ) : null}
    </>
  );
}

export default Map;
