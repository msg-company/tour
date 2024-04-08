"use client";
import { useEffect, useRef, useState } from "react";
import {
  Map,
  Source,
  Layer,
  Marker,
  MapRef,
  GeoJSONSource,
} from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";
import "mapbox-gl/dist/mapbox-gl.css";
const token =
  "pk.eyJ1Ijoia2lyaWxsZHJvbm92IiwiYSI6ImNsdXB2aHd1NzI4OXgyaWxpcG8yc2l6YTcifQ.ljCslQarEC3GOAbj6efLsg";

const cities = [
  { name: "Paris", longitude: 2.3522, latitude: 48.8566 },
  { name: "Marseille", longitude: 5.3698, latitude: 43.2965 },
  { name: "Toulouse", longitude: 1.3521, latitude: 43.6047 },
];

import { FeatureCollection } from "geojson";

const tour: FeatureCollection<any, any> = {
  type: "FeatureCollection",
  features: cities.map((city) => ({
    type: "Feature",
    properties: {
      name: city.name,
    },
    geometry: {
      type: "Point",
      coordinates: [city.longitude, city.latitude],
    },
  })),
};
const lineCoordinates = cities.map((city) => [city.longitude, city.latitude]);

export function TourMap() {
  const mapRef = useRef<MapRef>(null);
  const [viewPort, setViewPort] = useState({
    longitude: 2.3522, // Долгота Парижа
    latitude: 48.8566, // Широта Парижа
    zoom: 5,
  });

  const onClick = (event: any) => {
    const feature = event.features?.[0];
    if (feature && feature.properties && feature.properties.cluster_id) {
      const clusterId = feature.properties.cluster_id;

      const mapboxSource = mapRef.current?.getSource(
        "earthquakes",
      ) as GeoJSONSource;

      if (mapboxSource) {
        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) {
            return;
          }

          mapRef.current?.easeTo({
            center: feature.geometry.coordinates as [number, number],
            zoom: zoom as number,
            duration: 500,
          });
        });
      }
    }
  };
  const interactiveLayerIds = clusterLayer.id ? [clusterLayer.id] : [];
  const [zoomLevel, setZoomLevel] = useState<number | undefined>();

  useEffect(() => {
    const handleViewportChange = () => {
      const zoom = mapRef.current?.getZoom();
      setZoomLevel(zoom);
    };

    mapRef.current?.on("zoom", handleViewportChange);

    return () => {
      mapRef.current?.off("zoom", handleViewportChange);
    };
  }, [viewPort]);

  useEffect(() => {
    console.log("Zoom level changed to:", zoomLevel);
  }, [viewPort]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        initialViewState={viewPort}
        mapStyle="mapbox://styles/kirilldronov/clupwbo0u01ad01pi9gvia9vt"
        mapboxAccessToken={token}
        interactiveLayerIds={interactiveLayerIds}
        onClick={onClick}
        onMove={(evt) => setViewPort(evt.viewState)}
        ref={mapRef}
        style={{ height: 600 }}
      >
        <Source
          type="geojson"
          data={{
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: lineCoordinates,
            },
            properties: {},
          }}
        >
          <Layer
            type="line"
            paint={{
              "line-color": "#ff69b4",
              "line-width": 2,
            }}
          />
        </Source>
        <Source
          id="earthquakes"
          type="geojson"
          data={tour}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </div>
  );
}
