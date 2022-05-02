import proj4 from 'proj4';
import {register} from "ol/proj/proj4";

const registerProjections = () => {
  proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
  proj4.defs(
    'EPSG:2180',
    '+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +axis=neu'
  );
  proj4.defs(
    'EPSG:2177',
    '+proj=tmerc +lat_0=0 +lon_0=18 +k=0.999923 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +axis=neu'
  );


  register(proj4);
};

export { registerProjections };
