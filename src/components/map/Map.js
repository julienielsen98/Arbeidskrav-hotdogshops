import ReactMapGL, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import * as React from "react";
import Popover from "@mui/material/Popover";
import styles from "../map/Map.module.scss";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../../mock-data.json";

function Map() {
  const [location, setLocation] = React.useState({});

  const open = Boolean(location);
  const id = open ? "simple-popover" : undefined;

  const coordinates = data.map((result) => ({
    latitude: result.lat,
    longitude: result.lng,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 13,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/juliep98/cldwwz1yp000h01t84rju6235"
      mapboxAccessToken="pk.eyJ1IjoianVsaWVwOTgiLCJhIjoiY2xkdnM4aTBpMDBqYjNzbXlxems1NTNsZSJ9.DeGrRK8Xo6MqPnKMkznFeQ"
      {...viewport}
      onZoom={(nextViewport) => setViewport(nextViewport)}
      onDrag={(nextViewport) => setViewport(nextViewport)}
    >
      {data.map((result) => (
        <div key={result.name}>
          <Marker
            longitude={result.lng}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setLocation(result)}
          ></Marker>

          {location.lng === result.lng ? (
            <Popover
              onClose={() => setLocation({})}
              latitude={result.lat}
              longitude={result.lng}
              id={id}
              open={open}
              anchorEl={null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <Image
                    alt="hotdogshop"
                    width={300}
                    height={140}
                    blurDataURL="data:..."
                    placeholder="blur"
                    src={`/${process.env.assetPrefix}${result.Img}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.name}
                      <br />
                      <Image
                        src="/../public/star.png"
                        className="card--star"
                        alt="star"
                        width={12}
                        height={12}
                      />
                      <span className={styles.span}>
                        {result.stats.rating}/{result.stats.reviewCount}
                      </span>
                    </Typography>
                    <hr />
                    <Typography variant="body2" color="text.secondary">
                      {result.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Popover>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
