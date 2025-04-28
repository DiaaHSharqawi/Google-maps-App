import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

function SideBarToggleButton({ isSideBarVisible, toggleSideBarVisibility }) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: isSideBarVisible ? "10px" : "450px",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={toggleSideBarVisibility}
          style={{
            color: "white",
          }}
        >
          {isSideBarVisible ? (
            <ArrowBackIosOutlined />
          ) : (
            <ArrowForwardIosOutlined />
          )}
        </IconButton>
      </Box>
    </>
  );
}

export default SideBarToggleButton;
