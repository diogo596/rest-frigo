import { useState } from "react";
import axios from "axios";
import NavbarLogin from "../components/NavbarLogin";
import frigo from "../assets/frigo.png";
import "../scss/Fridge.scss";

const [fridge, setFridge] = useState({
  ingredientA: "",
  ingredientB: "",
  ingredientsC: "",
  ingredientsD: "",
});

const handleChangeFridge = (e) => {
  e.preventDefault();
  setFridge({
    ...fridge,
    [e.target.name]: e.target.value,
  });
};

const handleSubmitFridge = (e) => {
  e.preventDefault();
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/api/ingredients`, fridge)
    .then((res) => {
      console.info(res);
      navigate("/recettes");
    })
    .catch((err) => {
      console.error(err);
    });
};
function Fridge() {
  return (
    <div>
      <NavbarLogin />
      <div className="frigo">
        <p className="title-frigo">Mon Frigo</p>
        <div className="contener-input">
          <form
            className="form"
            action=""
            method="post"
            onSubmit={handleSubmitFridge}
          >
            <div className="label-container">
              <label htmlFor="pseudo" className="text-label">
                Pseudo
              </label>
              <input
                type="Username"
                id="Username"
                name="pseudo"
                required
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-container">
              <label htmlFor="email" className="text-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-container">
              <label htmlFor="Password" className="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-container">
              <label htmlFor="confirmPassword" className="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={handleChangeFridge}
              />
            </div>
            <button className="register-button" type="submit">
              Trouve une recette !
            </button>
          </form>
        </div>
        <img src={frigo} alt="fridge" className="frigo-logo" />
      </div>
    </div>
  );
}

export default Fridge;
