import { useEffect, useRef, useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import { initializeMap } from "./helpers/map";
import { registerProjections } from "./helpers/projections";
import {createFeatures, transformCollection, transformFeatures} from "./helpers/features";
import {importGEOJsonFeatures} from "./helpers/geojson";
import {Collection} from "ol";

export const Map = () => {
  const [isMapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current == null) {
      registerProjections();
      mapRef.current = initializeMap();
      setMapReady(true);
    }
  }, []);

  useEffect(() => {
    const features = createFeatures("Point", 50);

    // TODO: measure performance of GeoJSON transformation
    // const features = importGEOJsonFeatures("Polygon");

    const source = new VectorSource({features});
    const layer = new VectorLayer({source});

    // TODO: measure performance of transforming each feature
    transformFeatures(source.getFeatures(), 'EPSG:3857', 'EPSG:2180');

    // TODO: measure performance of transforming whole collection
    // const collection = new Collection(features);
    // transformCollection(collection, 'EPSG:3857', 'EPSG:2180');

    mapRef.current.addLayer(layer);
  }, [isMapReady]);

  return <div id="map" />;
};
