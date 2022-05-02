import {GeoJSON} from "ol/format";

import POINTS from '../data/points.json';
import LINESTRINGS from '../data/linestrings.json';
import POLYGONS from '../data/polygons.json';

import {MAP_PROJECTION} from "../constants/config";

export const importGEOJsonFeatures = (type) => {
  const options = {
    dataProjection: 'EPSG:3857',
    featureProjection: MAP_PROJECTION
  }

  switch(type) {
    case "Point": return (new GeoJSON()).readFeatures(POINTS, options);
    case "Linestring": return (new GeoJSON()).readFeatures(LINESTRINGS, options);
    case "Polygon": return (new GeoJSON()).readFeatures(POLYGONS, options);
    default: throw new Error('Unsupported geometry type');
  }
}

