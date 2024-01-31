import { Link } from "react-router-dom";
import axios from "axios";
import refrigerateur from "../assets/refrigerateur.png";
import aperitif from "../assets/aperitif.png";
import entree from "../assets/entree.png";
import plat from "../assets/plat.png";
import dessert from "../assets/dessert.png";
import loupe from "../assets/loupe.jpg";
import "../scss/NavbarLogin.scss";

function NavbarLogin() {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <div className="contener-logo">
          <img src={refrigerateur} alt="refrigerateur" className="logo" />
          <div className="title">
            <p className="fridge">Fridge</p>
            <p className="rest">Rest</p>
          </div>
        </div>
        <div className="search">
          <input className="input" type="text" placeholder="Une recette" />
          <button type="button" className="button-search">
            <img src={loupe} alt="search" className="loupe" />
          </button>
        </div>
        <button type="button" className="drive">
          <Link to="https://www.auchandrive.fr">Drive</Link>
        </button>
        <button type="button" className="logout">
          <Link to="/home">Logout</Link>
        </button>
      </div>
      <div className="navbar-secondary">
        <button type="button" className="button-secondary">
          <Link to="/recettes" className="button">
            <img src={aperitif} alt="aperitif" className="logo" />
            <p className="text">Apéritif</p>
          </Link>
        </button>
        <button type="button" className="button-secondary">
          <Link to="/recettes" className="button">
            <img src={entree} alt="entree" className="logo" />
            <p className="text">Entree</p>
          </Link>
        </button>
        <button type="button" className="button-secondary">
          <Link to="/recettes" className="button">
            <img src={plat} alt="plat" className="logo" />
            <p className="text">Plat</p>
          </Link>
        </button>
        <button type="button" className="button-secondary">
          <Link to="/recettes" className="button">
            <img src={dessert} alt="dessert" className="logo" />
            <p className="text">Dessert</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavbarLogin;
