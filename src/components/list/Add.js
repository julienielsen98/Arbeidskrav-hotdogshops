import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const Add = ({ stores, setStores }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [lng, setLng] = React.useState("");
  const [img, setImg] = React.useState("");
  const [color, setColor] = React.useState("");
  const [rating, setRating] = React.useState("");

  const handleAddStore = () => {
    const newStore = {
      name: name,
      shortName: name.substr(0, 2),
      address: address,
      lat: lat,
      lng: lng,
      img: img,
      color: color,
      stats: {
        rating: rating,
        reviewCount: "",
      },
    };

    const newStores = [...stores, newStore];
    setStores(newStores);
    setOpen(false);
  };

  return (
    <>
      <Button id="ADD" onClick={() => setOpen(true)}>
        Add new
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a new store</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Latitude"
            type="text"
            fullWidth
            onChange={(e) => setLat(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Longitude"
            type="text"
            fullWidth
            onChange={(e) => setLng(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Image URL"
            type="text"
            fullWidth
            onChange={(e) => setImg(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            onChange={(e) => setColor(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Rating out of 5"
            type="number"
            fullWidth
            onChange={(e) => setRating(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddStore}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Add;
