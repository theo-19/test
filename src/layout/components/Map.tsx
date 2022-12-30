import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "../../App.css";

interface Props {
  coordinates?: {
    N: number;
    E: number;
  };
}

export default React.memo(Map);

function Map(props: Props) {
  const { coordinates } = props;

  return (
    <MapContainer
      className="map-container"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[coordinates?.N, coordinates?.E] || [41.0082, 28.9784]}
      />
    </MapContainer>
  );
}
