import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import refrigerateur from "../assets/refrigerateur.png";
import loupe from "../assets/loupe.jpg";
import "../scss/Navbar.scss";

const fetchDataBase = () => {
  const [recette, setRecette] = useState([]);
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/recettes`)
    .then((res) => {
      console.info(res);
      setRecette(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

function Navbar() {
  return (
    <div className="navbar">
      <div className="contener-logo">
        <img src={refrigerateur} alt="refrigerateur" className="logo" />
        <div className="title">
          <p className="fridge">Fridge</p>
          <p className="rest">Rest</p>
        </div>
      </div>
      <div className="search">
        <input className="input" type="text" placeholder="Une recette" />
        <button type="button" className="button-search" onClick={fetchDataBase}>
          <img src={loupe} alt="search" className="loupe" />
        </button>
      </div>
      <button type="button" className="myfridge">
        <Link to="/login">My fridge</Link>
      </button>
    </div>
  );
}

export default Navbar;
