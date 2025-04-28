import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

const VITE_GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

function Map({ centerCoordinates, cityCoordinates, onCityClick }) {
  const [zoom] = useState(12);

  const [center, setCenter] = useState({
    lat: centerCoordinates.lat,
    lng: centerCoordinates.lng,
  });

  useEffect(() => {
    setCenter({
      lat: centerCoordinates.lat,
      lng: centerCoordinates.lng,
    });
  }, [centerCoordinates]);

  return cityCoordinates && cityCoordinates.length > 0 ? (
    <Box sx={{ width: "100%", height: "100vh", position: "absolute" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: VITE_GOOGLE_MAP_API_KEY }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          cityCoordinates.forEach((city) => {
            const marker = new maps.Marker({
              position: { lat: city.lat, lng: city.lng },
              map,
              title: city.text,
            });
            marker.addListener("click", (e) => onCityClick(e, city));
          });
        }}
      />
    </Box>
  ) : null;
}

export default Map;
