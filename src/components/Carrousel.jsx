import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carrousel({ slides }) {
  // État pour suivre l'image actuellement affichée
  const [current, setCurrent] = useState(0);
  const length = slides.length; // Nombre total d'images

  // Fonction pour passer à l'image suivante
  const nextImage = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  // Fonction pour revenir à l'image précédente
  const prevImage = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  // Ajout de la navigation avec les flèches du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Nettoyage de l'écouteur d'événements au démontage du composant
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  // Vérification : si aucune image n'est fournie, ne rien afficher
  if (!Array.isArray(slides) || slides.length === 0) return null;

  return (
    <section className="slide">
      {/* Affichage des flèches de navigation seulement s'il y a plusieurs images */}
      {length > 1 && (
        <>
          <p className="left-Arrow" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </p>
          <p className="right-Arrow" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </>
      )}
      
      {slides.map((image, index) => (
        <div
          key={index}
          className={`slider ${index === current ? "active" : ""}`}
        >
          {/* Utilisation de <picture> pour optimiser le support WebP */}
          <picture>
            <source srcSet={image} type="image/webp" />
            <img
              src={image}
              alt={`Slide ${index}`}
              className="slide__image"
              onError={(e) => (e.target.src = "/images/default.webp")} // Image de secours en cas d'erreur
            />
          </picture>
          {/* Affichage du compteur d'images uniquement s'il y en a plusieurs */}
          {length > 1 && index === current && (
            <span className="slider__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}

// Définition des types de props pour s'assurer que slides est bien un tableau de chaînes de caractères
Carrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
