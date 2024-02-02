import Navbar from "../components/Navbar";
import entree from "../assets/tartare-cabillaud.jpeg";
import plat from "../assets/chili-con-carne.jpg";
import dessert from "../assets/cheesecake-aux-fruits-rouges.jpg";
import "../scss/Home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <div className="recettes">
        <div className="plat">
          <div className="infos-recette">
            <div className="title-image">
              <p className="title">TARTARE DE CABILLAUD</p>
              <img src={entree} alt="entree" className="image" />
            </div>
            <div className="ingredients-recettes">
              <p className="ingredients">Ingrédients</p>
              <p>cabillaud</p>
              <p>huile d'olive</p>
              <p>capre</p>
              <p>échalote</p>
              <p>persil</p>
              <p>sel, poivre</p>
            </div>
          </div>
          <div className="infos-recette">
            <div className="title-image">
              <p className="title">CHILI CON CARNE</p>
              <img src={plat} alt="entree" className="image" />
            </div>
            <div className="ingredients-recettes">
              <p className="ingredients">Ingrédients</p>
              <p>persil</p>
              <p>poivre, sel</p>
              <p>bouillon de boeuf</p>
              <p>aricot</p>
              <p>viande haché</p>
              <p>chili en poudre</p>
              <p>beurre</p>
              <p>sauce tomate</p>
              <p>ail</p>
            </div>
          </div>
        </div>
        <div className="dessert">
          <div className="infos-dessert">
            <div className="title-image">
              <p className="title">CHEESECAKE AUX FRUITS ROUGES</p>
              <img src={dessert} alt="entree" className="image" />
            </div>
            <div className="ingredients-dessert">
              <p className="ingredients">Ingrédients</p>
              <p>speculoos</p>
              <p>beurre demi-sel</p>
              <p>crème liquide</p>
              <p>coulis de fruit rouge</p>
              <p>mascarpone</p>
              <p>petit suisse</p>
              <p>sucre</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
