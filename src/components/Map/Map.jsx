import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";

const VITE_GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

function Map({ center, zoom }) {
  console.log("Map component rendered with center:", center, "and zoom:", zoom);
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: VITE_GOOGLE_MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        />
      </Box>
    </>
  );
}

export default Map;
