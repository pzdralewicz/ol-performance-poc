import GeometryCollection from "ol/geom/GeometryCollection";

export {
  createFeatures,
  transformFeatures,
  transformCollection,
};

const createFeatures  = (type, count) => {
  switch (type) {
    case "Point":
      return createPointFeatures(count);
    case "Linestring":
      return createLineStringFeatures(count);
    case "Polygon":
      return createPolygonFeatures(count);
  }
};

const createPointFeatures = (count) => {};

const createLineStringFeatures = (count) => {};

const createPolygonFeatures = (count) => {};

const transformFeatures = (features, source, destination) => {
  features.forEach((feature) => {
    feature.transform(source, destination);
  });
};

const transformCollection = (features, source, destination) => {
  const collection = new GeometryCollection(features);

  collection.transform(source, destination);
};
