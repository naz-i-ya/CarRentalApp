import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMapComponent = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // Fetch GeoJSON data when source and destination change
    if (source && destination) {
      async function fetchMapData() {
        try {
          const response = await fetch(`/api/mapdata?source=${source}&destination=${destination}`);
          if (response.status !== 200) {
            throw new Error("Error fetching map data from API route");
          }
          const result = await response.json();
          // Update the map with the new data
          // For example, set the source and destination markers
          setMapData(result);
        } catch (error) {
          console.error(error);
        }
      }

      fetchMapData();
    }
  }, [source, destination]);

  return (
    <div>
      {/* Create UI elements for users to select source and destination */}
      <input
        type="text"
        placeholder="Source (latitude,longitude)"
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination (latitude,longitude)"
        onChange={(e) => setDestination(e.target.value)}
      />

      {/* Render the map with React Leaflet */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {source && (
          <Marker
            position={[source.split(",")[0], source.split(",")[1]]}
          >
            <Popup>Source</Popup>
          </Marker>
        )}
        {destination && (
          <Marker
            position={[destination.split(",")[0], destination.split(",")[1]]}
          >
            <Popup>Destination</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
