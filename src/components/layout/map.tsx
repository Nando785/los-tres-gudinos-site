"use client";

import { useEffect, useRef } from "react";
import {
  Map,
  MapGeoJSON,
  type MapRef,
} from "@/components/ui/map";

const area: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-95.65505410672415, 29.56978497714826],
            [-94.8514967833098, 29.25259700344475],
            [-94.74029963844053, 29.324167852658487],
            [-95.03734038209927, 29.93153374775561],
            [-95.15352036184744, 30.10474581459007],
            [-95.4767293239998, 30.415891468509322],
            [-96.26103595764584, 30.145050521792896]
          ],
        ],
      },
    },
  ],
};

export function CoverageMap() {
  const mapRef = useRef<MapRef>(null);
  const location = {lat: -95.343755, lng: 29.867445};
  const selectedStyle = "https://tiles.openfreemap.org/styles/bright";

  useEffect(() => {
    mapRef.current?.easeTo({ pitch: 0, duration: 500 });
  });

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl shadow-xl shadow-black/30">
      <Map
        ref={mapRef}
        center={[location.lat, location.lng]}
        zoom={7}
        styles={
          selectedStyle
            ? { light: selectedStyle, dark: selectedStyle }
            : undefined
        }
      >

          <MapGeoJSON
            data={area}
            fillPaint={{ "fill-color": "#3b82f6", "fill-opacity": 0.25 }}
            linePaint={{ "line-color": "#2563eb", "line-width": 2 }}
          />
      </Map>
    </div>
  );
}
