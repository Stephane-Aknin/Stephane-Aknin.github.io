import FicheProjet from "../components/FicheProjet";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Projet = () => {
  return (
    <div className="projet__container">
      <Header />
      <main>
        <FicheProjet />
      </main>
      <Footer />
    </div>
  );
};

export default Projet;
