import { createContext } from "react";

const MapContext = createContext();

const MapProvider = ({ isMapExpanded, setIsMapExpanded, children }) => {
  const toggleMapExpansion = () => {
    setIsMapExpanded(!isMapExpanded);
  };

  return (
    <>
      <MapContext.Provider
        value={{ isMapExpanded, setIsMapExpanded, toggleMapExpansion }}
      >
        {children}
      </MapContext.Provider>
    </>
  );
};

export { MapContext, MapProvider };
