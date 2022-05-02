import { useEffect, useRef, useState } from "react";
import { initializeMap } from "./helpers/map";
import { registerProjections } from "./helpers/projections";
import { createFeatures } from "./helpers/features";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

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
    const features = createFeatures("Polygon", 50);

    const source = new VectorSource({features});
    const layer = new VectorLayer({source});

    mapRef.current.addLayer(layer);
    console.log("fetch features");
    console.log("transform features");
    console.log("draw features");
  }, [isMapReady]);

  return <div id="map" />;
};
