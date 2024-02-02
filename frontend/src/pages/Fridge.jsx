import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarLogin from "../components/NavbarLogin";
import frigo from "../assets/frigo.png";
import "../scss/Fridge.scss";

function Fridge() {
  const navigate = useNavigate();
  const [fridge, setFridge] = useState({
    ingredientA: "",
    ingredientB: "",
    ingredientC: "",
    ingredientD: "",
  });

  const [recipes, setRecipes] = useState([]); // Nouvel état pour stocker les recettes

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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/ingredients/recettes`, {
        params: fridge,
      })
      .then((res) => {
        console.info(res.data);
        setRecipes(res.data);
        navigate("/recettes");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <NavbarLogin />
      <div className="frigo">
        <p className="title-frigo">Mon Frigo</p>
        <div className="contener-input">
          <img src={frigo} alt="fridge" className="frigo-logo" />
          <form
            className="formule"
            action=""
            method="post"
            onSubmit={handleSubmitFridge}
          >
            <div className="label-containe">
              <label htmlFor="ingredientA" className="ingredient">
                INGREDIENT 1
              </label>
              <input
                type="text"
                id="text"
                name="ingredientA"
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-containe">
              <label htmlFor="ingredientB" className="ingredient">
                INGREDIENT 2
              </label>
              <input
                type="text"
                id="text"
                name="ingredientB"
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-containe">
              <label htmlFor="ingredientC" className="ingredient">
                INGREDIENT 3
              </label>
              <input
                type="text"
                id="text"
                name="ingredientC"
                onChange={handleChangeFridge}
              />
            </div>
            <div className="label-containe">
              <label htmlFor="ingredientD" className="ingredient">
                INGREDIENT 4
              </label>
              <input
                type="text"
                id="text"
                name="ingredientD"
                onChange={handleChangeFridge}
              />
            </div>
            <button className="register-button" type="submit">
              Trouve une recette !
            </button>
          </form>
          <div>
            <h2>Résultats :</h2>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.recette_id}>
                  {recipe.recette_name} - {recipe.ingredient_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fridge;
