import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "../../App.css";

interface Props {
  selectedTerretory: {
    title: string;
    coordinates:
      | {
          N: number;
          E: number;
        }
      | undefined;
  };
}

export default React.memo(Map);

function Map(props: Props) {
  const { selectedTerretory } = props;

  const iconMarkup = renderToStaticMarkup(
    <FaMapMarkerAlt className="marker-icon" />
  );
  const markerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <MapContainer
      className="map-container"
      center={[41.0082, 28.9784]}
      zoom={4}
      maxZoom={18}
      markerZoomAnimation
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[
          selectedTerretory.coordinates?.N || 41.0082,
          selectedTerretory.coordinates?.E || 28.9784,
        ]}
        icon={markerIcon}
      >
        <Tooltip>{selectedTerretory.title}</Tooltip>
      </Marker>
    </MapContainer>
  );
}
