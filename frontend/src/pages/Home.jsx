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
              <p>huile</p>
            </div>
          </div>
          <div className="infos-recette">
            <div className="title-image">
              <p className="title">CHILI CON CARNE</p>
              <img src={plat} alt="entree" className="image" />
            </div>
            <div className="ingredients-recettes">
              <p className="ingredients">Ingrédients</p>
              <p>huile</p>
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
              <p>huile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
