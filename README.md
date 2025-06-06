# Google Maps App

This project is a React application that integrates Google Maps to display city locations on an interactive map. It uses the `google-map-react` library to render the map and provides features like city markers and clickable markers to center the map on selected locations.

## Features

- **Interactive Map**:
  - Displays a Google Map centered on specified coordinates.
  - Adds markers for multiple cities.

- **City Marker Interaction**:
  - Clickable markers that allow users to re-center the map on the selected city.
  - Sidebar with a list of cities for quick navigation.

- **Map View Toggle**:
  - Expand or collapse the map view using a toggle button.

## Technologies Used

- **Frontend**:
  - React
  - `google-map-react` (for Google Maps integration)
  - Material-UI (for styling and components)

- **Build Tool**:
  - Vite (for development and build)

## Demo

Check out the live demo of the application: [Google Maps App Demo](https://google-maps-app.onrender.com/)

## Getting Started

### Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) (LTS recommended).
2. **Google Maps API Key**: Set up a Google Cloud project and enable the Maps JavaScript API. Obtain an API key.

### Setting Up Google Maps API Key

To use this project, you need a Google Maps API Key. Follow these steps to generate your API key:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Navigate to **APIs & Services > Library** and enable the "Maps JavaScript API."
4. Go to **APIs & Services > Credentials** and click "Create Credentials" > "API Key."
5. Copy the generated API key.
6. Restrict the API key for security:
   - Under "API restrictions," select "Maps JavaScript API."
   - Under "Website restrictions," add your development domain (e.g., `http://localhost:3000`) and any production domains.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DiaaHSharqawi/Google-maps-App.git
   cd Google-maps-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add your Google Maps API key:
     ```
     VITE_GOOGLE_MAP_API_KEY=your_google_maps_api_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

### Usage

1. The map will load with city markers based on predefined coordinates.
2. Click on a city name in the sidebar to center the map on that location.
3. Use the toggle button to expand or collapse the map view.

### File Structure

- **`src/App.jsx`**: Main application component, initializes the map and sidebar.
- **`src/components/Map/Map.jsx`**: Handles rendering the Google Map and adding markers.
- **`src/data/cityCoordinates.js`**: Contains the coordinates of cities displayed on the map.
- **`src/context/MapContext.jsx`**: Provides context for managing map expansion state.
- **`src/components/SideBar/SideBar.jsx`**: Sidebar component for listing cities.
- **`src/components/MapViewToggleButton/MapViewToggleButton.jsx`**: Button for toggling map view.

### Example City Data

The application includes the following city coordinates:
```javascript
const citiesCoordinates = [
  { lat: 31.7683, lng: 35.2137, text: "Jerusalem" },
  { lat: 31.9522, lng: 35.2332, text: "Ramallah" },
  { lat: 32.2211, lng: 35.2544, text: "Nablus" },
  { lat: 31.7054, lng: 35.2024, text: "Bethlehem" },
  { lat: 31.5326, lng: 35.0998, text: "Hebron" },
  { lat: 32.4597, lng: 35.3009, text: "Jenin" },
  { lat: 31.5, lng: 34.4667, text: "Gaza" },
  { lat: 31.8996, lng: 35.2042, text: "Jericho" },
  { lat: 32.0833, lng: 35.1833, text: "Tulkarm" },
];
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact

For questions or issues, please contact [DiaaHSharqawi](https://github.com/DiaaHSharqawi).
