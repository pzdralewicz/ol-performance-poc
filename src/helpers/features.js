import { Feature } from "ol";
import { LineString, Point, Polygon } from "ol/geom";
import GeometryCollection from "ol/geom/GeometryCollection";

import {MAP_CENTERS} from "../constants/config";

const moveToRandomDirection = (coordinates) => {
  const xDelta = Math.round(Math.random()) * 200 - 100;
  const yDelta = Math.round(Math.random()) * 200 - 100;

  return [coordinates[0] + xDelta, coordinates[1] + yDelta];
};

const createFeatures = (type, size = 40, projection = "EPSG:3857") => {
  switch (type) {
    case "Point":
      return createPointFeatures(size, projection);
    case "Linestring":
      return createLineStringFeatures(size, projection);
    case "Polygon":
      return createPolygonFeatures(size, projection);
    default: throw new Error("Unsupported geometry type")
  }
};

const createPointFeatures = (size, projection) => {
  const features = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const coordinates = [MAP_CENTERS[projection][0] + j * 1000, MAP_CENTERS[projection][1] + i * 1000];

      const feature = new Feature(new Point(coordinates));
      features.push(feature);
    }
  }

  return features;
};

const createLineStringFeatures = (size, projection, complexity = 10) => {
  const features = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const coordinates = [
        [MAP_CENTERS[projection][0] + j * 1000, MAP_CENTERS[projection][1] + i * 1000],
      ];

      for (let l = 0; l < complexity; l++) {
        const previous = coordinates[l];

        coordinates[l + 1] = moveToRandomDirection(previous);
      }

      const feature = new Feature(new LineString(coordinates));
      features.push(feature);
    }
  }

  return features;
};

const createPolygonFeatures = (size, projection) => {
  const features = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const STARTING_POINT = [MAP_CENTERS[projection][0] + j * 100, MAP_CENTERS[projection][1] + i * 100];

      const coordinates = [
        [
          STARTING_POINT,
          [STARTING_POINT[0] + 80, STARTING_POINT[1]],
          [STARTING_POINT[0] + 80, STARTING_POINT[1] + 80],
          [STARTING_POINT[0], STARTING_POINT[1] + 80],
          STARTING_POINT,
        ],
      ];

      const feature = new Feature(new Polygon(coordinates));
      features.push(feature);
    }
  }

  return features;
};

const transformFeatures = (features, source, destination) => {
  features.forEach((feature) => {
    feature.getGeometry().transform(source, destination);
  });
};

const transformCollection = (features, source, destination) => {
  const collection = new GeometryCollection(features);

  collection.transform(source, destination);
};

export { createFeatures, transformFeatures, transformCollection };
