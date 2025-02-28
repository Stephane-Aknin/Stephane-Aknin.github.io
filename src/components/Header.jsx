import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
          <li><a href="/#competences-projets" onClick={(e) => handleNavigation(e, "#competences-projets")}>Compétences / Projets</a></li>
          <li><a href="/#contact" onClick={(e) => handleNavigation(e, "#contact")}>Contact</a></li>
        </ul>
      </nav>

      {/* Bouton Dark Mode */}
      <div className="header__button">
        <button onClick={toggleDarkMode}>
          <Sun className="sun__icone" />
        </button>
      </div>
    </header>
  );
};

export default Header;
