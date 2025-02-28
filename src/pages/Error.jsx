import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Erreur = () => {
  return (
    <>
      <div className="Error">
        <Header />
        <main>
          <Error404 />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Erreur;
