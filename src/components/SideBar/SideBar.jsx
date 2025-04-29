import { Box, List, ListItem, ListItemText } from "@mui/material";

function SideBar({ citiesCoordinates, handleCityClick }) {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "white",
        overflowY: "auto",
        padding: "16px",
        flexGrow: 1,
      }}
    >
      <h1>Cities coordinates</h1>
      <List>
        {citiesCoordinates.map((city, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
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
