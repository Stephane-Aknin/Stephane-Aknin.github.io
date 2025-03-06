import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // ✅ Mise à jour du titre et de la meta description pour le SEO
    document.title = "Accueil - Arnaud Guillemin | Développeur Web";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez mes compétences et projets en développement web. Spécialiste React et intégration front-end.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Découvrez mes compétences et projets en développement web. Spécialiste React et intégration front-end.";
      document.head.appendChild(meta);
    }

    // ✅ Vérifie s'il y a une ancre à scroller
    const anchor = sessionStorage.getItem("scrollTo");
    if (anchor) {
      sessionStorage.removeItem("scrollTo");

      setTimeout(() => {
        const section = document.querySelector(anchor);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <div className="home__container">
          <Skills />
          <Works />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
