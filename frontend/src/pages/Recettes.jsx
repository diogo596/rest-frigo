import NavbarLogin from "../components/NavbarLogin";
import dessert from "../assets/tiramisu italien.jpg";
import "../scss/Recettes.scss";

function Recettes() {
  return (
    <div>
      <NavbarLogin />
      <div className="recette">
        <div className="plat">
          <div className="infos-recette">
            <div className="title-image">
              <p className="title">TIRAMISU</p>
              <img src={dessert} alt="entree" className="image" />
            </div>
          </div>
          <div className="infos-recette">
            <div className="ingredients-recettes">
              <p className="ingredients">Ingrédients en stock</p>
              <p>boudoir</p>
            </div>
          </div>
        </div>
        <div className="dessert">
          <div className="infos-dessert">
            <div className="ingredients-dessert">
              <p className="ingredients">Ingrédients manquant</p>
              <p>oeuf</p>
              <p>sucre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recettes;
