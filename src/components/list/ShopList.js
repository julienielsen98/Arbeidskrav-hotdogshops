import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import data from "../../mock-data.json";
import styling from "./List.module.scss";
import Image from "next/image";
import Link from "next/link";
import { context } from "../context/Contexts";

import Edit from "./Edit";
import Add from "./Add";
import { Button } from "@mui/material";

export default function ShopsList() {
  const [stores, setStores] = React.useState(data);
  const { adminMode } = React.useContext(context);
  const [showAddPopup, setShowAddPopup] = React.useState(false);

  const handleSave = (newStore) => {
    setStores([...stores, newStore]);
    setShowAddPopup(false);
  };
  return (
    <>
      {adminMode ? (
        <>
          <Add stores={stores} setStores={setStores} />
        </>
      ) : null}
      <div className={styling.list}>
        {stores.map((store, i) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={store.name}
            className={styling.card}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: store.color }} aria-label="recipe">
                  {store.shortName}
                </Avatar>
              }
              action={
                <IconButton aria-label="location">
                  <Link
                    href={`https://www.google.no/maps/search/${store.address}/@${store.lat},${store.lng},9z/data=!3m1!4b1?hl=no`}
                  >
                    <LocationOnIcon />
                  </Link>
                </IconButton>
              }
              title={store.name}
              subheader={store.address}
            />

            <Image
              alt="hotdogshop"
              width={500}
              height={300}
              blurDataURL="data:..."
              placeholder="blur"
              src={`${process.env.assetPrefix}${store.img}`}
            />

            <CardContent>
              <Image
                src="/../public/star.png"
                className="card--star"
                alt="star"
                width={12}
                height={12}
              />
              <span>
                {store.stats.rating}/{store.stats.reviewCount}
              </span>
            </CardContent>
            <CardActions disableSpacing>
              {adminMode ? (
                <>
                  <Edit stores={stores} i={i} setStores={setStores} />
                </>
              ) : (
                false
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
