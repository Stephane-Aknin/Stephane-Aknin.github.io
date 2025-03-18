import { useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {  Menu, X } from "lucide-react"; // Ajouter l'icône Moon

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const [menuOpen, setMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour gérer la navigation et le scroll vers l'ancre
  const handleNavigation = (e, anchor) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Stocke l'ancre et redirige vers Home.jsx
      sessionStorage.setItem("scrollTo", anchor);
      navigate("/"); 
    } else {
      // Si déjà sur Home, scrolle directement
      scrollToAnchor(anchor);
    }
  };

  // Fonction pour scroller après redirection
  const scrollToAnchor = (anchor) => {
    setTimeout(() => {
      const section = document.querySelector(anchor);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); // Petit délai pour s'assurer que le DOM est chargé
  };

  return (
    <header className="header">
      {/* Menu Burger (Mobile) */}
      <div className="burger__menu" onClick={toggleMenu}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Navigation */}
      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav__list">
          <li><a href="/#a-propos" onClick={(e) => handleNavigation(e, "#a-propos")}>À propos</a></li>
          <li><a href="/#services" onClick={(e) => handleNavigation(e, "#services")}>Services</a></li>
          <li><a href="/#contact" onClick={(e) => handleNavigation(e, "#contact")}>Contact</a></li>
        </ul>
      </nav>

      {/* Numéro de téléphone */}
      <div className="header__phone">
        <a href="tel:+33618528585">06 18 52 85 85</a>
      </div>

      
    </header>
  );
};

export default Header;
