import { Box, List, ListItem, ListItemText } from "@mui/material";

function SideBar({ citiesCoordinates, handleCityClick }) {
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
      <h1>Cities coordinates</h1>
      <List>
        {citiesCoordinates.map((city, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: "1px solid #ddd", cursor: "pointer" }}
            onClick={() => handleCityClick(city)}
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
