import {useEffect, useRef, useState} from "react";
import {initializeMap} from "./helpers/map";
import {registerProjections} from "./helpers/projections";

export const Map = () => {
  const [isMapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current == null) {
      registerProjections();
      mapRef.current = initializeMap();
      setMapReady(true);
    }
  }, [])

  useEffect(() => {
    console.log('fetch features');
    console.log('transform features');
    console.log('draw features');
  }, [isMapReady])

  return (
    <div id="map" />
  )
}
