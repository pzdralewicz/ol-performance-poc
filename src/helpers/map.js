import Map from "ol/Map";
import View from "ol/View";
import {defaults, MousePosition} from "ol/control";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

export const MAP_CENTER = [2119445, 6926417];

const initializeMap = () => {
  return new Map({
    target: "map",
    view: new View({
      projection: "EPSG:3857",
      center: MAP_CENTER,
      zoom: 12,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    controls: defaults({
      rotate: false,
      zoom: false,
      attribution: false,
    }).extend([new MousePosition()]),
  });
};

export { initializeMap };
