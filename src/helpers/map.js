import Map from "ol/Map";
import View from "ol/View";
import { defaults, ScaleLine } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

const initializeMap = () => {
  return new Map({
    target: "map",
    view: new View({
      projection: "",
      center: [2132898.83727, 6858541.673972],
      zoom: 7,
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
    }).extend([new ScaleLine()]),
  });
};

export { initializeMap };
