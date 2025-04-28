import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

function SideBarToggleButton({ showSideBar, handleToggleSideBar }) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: showSideBar ? "10px" : "450px",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={handleToggleSideBar}
          style={{
            color: "white",
          }}
        >
          {showSideBar ? <ArrowBackIosOutlined /> : <ArrowForwardIosOutlined />}
        </IconButton>
      </Box>
    </>
  );
}

export default SideBarToggleButton;
