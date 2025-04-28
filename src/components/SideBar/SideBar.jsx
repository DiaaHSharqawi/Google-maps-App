import { Box, List, ListItem, ListItemText } from "@mui/material";

function SideBar({ cityCoordinates, onCityClick }) {
  return (
    <Box
      sx={{
        width: "450px",
        height: "100%",
        backgroundColor: "white",
        overflowY: "auto",
        padding: "16px",
      }}
    >
      <h1>City Coordinates</h1>
      <List>
        {cityCoordinates.map((city, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: "1px solid #ddd", cursor: "pointer" }}
            onClick={(e) => onCityClick(e, city)}
          >
            <ListItemText
              primary={city.text}
              secondary={`Lat: ${city.lat}, Lng: ${city.lng}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideBar;
