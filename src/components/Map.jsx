/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from "react-leaflet";

function Map({ lat, lng }) {
  return (
    <MapContainer center={[lat, lng]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;
