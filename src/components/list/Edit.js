import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
}));

const Edit = ({ stores, i, setStores }) => {
  const [formValues, setFormValues] = useState(stores[i]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    setStores((prev) => prev.filter((_, index) => index !== i));
  };

  const handleSave = () => {
    setStores((prev) => {
      const newStores = [...prev];
      newStores[i] = formValues;
      return newStores;
    });
  };

  const handleAdd = () => {
    setStores((prev) => [...prev, formValues]);
    setFormValues({ name: "", shortName: "", color: "", img: "", address: "" });
  };

  return (
    <Wrapper>
      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Short name"
        name="shortName"
        value={formValues.shortName}
        onChange={handleInputChange}
      />
      <TextField
        label="Color"
        name="color"
        value={formValues.color}
        onChange={handleInputChange}
      />
      <TextField
        label="Image URL"
        name="img"
        value={formValues.img}
        onChange={handleInputChange}
      />
      <TextField
        label="Address"
        name="address"
        value={formValues.address}
        onChange={handleInputChange}
      />
      {i !== undefined ? (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      ) : (
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      )}
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </Wrapper>
  );
};

export default Edit;
