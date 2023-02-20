import { useContext, useState, createContext } from "react";
import ShopsList from "../list/ShopList";
import styling from "./Navbar.module.scss";
import * as React from "react";
import { context } from "../context/Contexts";

const correctUserName = "admin";
const correctPassword = "admin";

export default function Login({ toggleDrawer }) {
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const { adminMode, setAdminMode } = useContext(context);

  console.log(adminMode);
  function handleChange(event) {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formData.userName === correctUserName &&
      formData.password === correctPassword
    ) {
      setAdminMode(true);
    } else {
      alert("Feil brukernavn eller passord, prøv igjen");
    }
  }
  //   console.log(adminMode);
  return (
    <div>
      <form className={styling.login} onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Brukernavn"
          required
          className="form--input"
          name="userName"
          onChange={handleChange}
          value={formData.userName}
        />
        <input
          type="password"
          placeholder="Passord"
          required
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <div className="form--actions">
          <button
            type="submit"
            className="form--button form--submit"
            onClick={toggleDrawer}
          >
            Logg inn
          </button>
        </div>
      </form>
    </div>
  );
}
