import Map from "ol/Map";
import View from "ol/View";
import {defaults, MousePosition} from "ol/control";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

import {MAP_CENTER, MAP_PROJECTION} from "../constants/config";

const initializeMap = () => {
  return new Map({
    target: "map",
    view: new View({
      projection: MAP_PROJECTION,
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
