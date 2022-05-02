const MAP_CENTERS = {
  "EPSG:2177": [6573421, 5834166],
  "EPSG:2180": [505417, 529332],
  "EPSG:3857": [2119445, 6926417],
}

const MAP_PROJECTION = "EPSG:2180";
const MAP_CENTER = MAP_CENTERS[MAP_PROJECTION];

export {MAP_CENTER, MAP_CENTERS, MAP_PROJECTION}