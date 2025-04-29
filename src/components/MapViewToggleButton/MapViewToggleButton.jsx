import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import { useContext } from "react";
import { MapContext } from "../../context/MapContext";

function MapViewToggleButton() {
  const { isMapExpanded, toggleMapExpansion } = useContext(MapContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          padding: "10px",
        }}
      >
        <IconButton
          onClick={toggleMapExpansion}
          style={{
            color: "black",
            backgroundColor: "white",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        >
          {isMapExpanded ? (
            <ArrowBackIosOutlined />
          ) : (
            <ArrowForwardIosOutlined />
          )}
        </IconButton>
      </Box>
    </>
  );
}

export default MapViewToggleButton;
