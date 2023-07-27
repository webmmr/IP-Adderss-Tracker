/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

function Map({ lat, lng }) {
  var container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }
  const map = L.map("map").setView([lat, lng], 13);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 35,
  }).addTo(map);
  var locationIcon = L.icon({
    iconUrl: locIcon,
    iconSize: [40, 45], // size of the icon
  });

  const marker = L.marker([lat, lng], {
    icon: "X",
  }).addTo(map);
}

export default Map;
