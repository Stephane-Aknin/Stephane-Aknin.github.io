import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // Vérifie s'il existe une ancre stockée en session (par exemple, après une redirection)
    const anchor = sessionStorage.getItem("scrollTo");
    if (anchor) {
      sessionStorage.removeItem("scrollTo"); // Supprime l'entrée après utilisation pour éviter un scroll intempestif

      setTimeout(() => {
        const section = document.querySelector(anchor); // Sélectionne l'élément correspondant à l'ancre
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" }); // Défilement fluide vers la section
        }
      }, 300); // Délai pour s'assurer que le DOM est bien chargé avant d'exécuter le scroll
    }
  }, []); // useEffect s'exécute une seule fois après le montage du composant

  return (
    <div className="home">
      <Header /> {/* En-tête de la page */}
      <main>
        <Hero /> {/* Section "À propos" */}
        <div className="home__container">
          <Skills /> {/* Section compétences */}
          <Works /> {/* Section des projets réalisés */}
        </div>
        <Contact /> {/* Section contact */}
      </main>
      <Footer /> {/* Pied de page */}
    </div>
  );
};

export default Home;
