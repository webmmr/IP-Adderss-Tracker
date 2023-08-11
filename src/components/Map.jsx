/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import styles from "./Map.module.css";

function Map({ mapLat, mapLng }) {
  const [mapPosition, setMapPosition] = useState(10, 10);

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        // center={[mapLat, mapLng]}
        zoom={9}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={[mapLat, mapLng]}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
