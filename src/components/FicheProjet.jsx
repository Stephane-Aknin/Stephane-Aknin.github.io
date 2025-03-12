import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "./Carrousel";
import GithubIcone from "../images/GithubIcone";
import HtmlCssIcone from "../images/HtmlIcone";
import ReactIcone from "../images/ReactIcone";
import JavascriptIcone from "../images/JavascriptIcone";
import CssIcone from "../images/CssIcone";


const FicheProjet = () => {
  // Récupération de l'ID du projet depuis l'URL
  const { id } = useParams();

  // États pour stocker les données du projet et le statut du chargement
  const [ficheProjet, setFicheProjet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remonte automatiquement en haut de la page au chargement du composant
    window.scrollTo(0, 0);

    // Simule un appel API pour récupérer les projets depuis un fichier JSON
    fetch("/portfolio/annexes/projets.json")
      .then((response) => response.json()) // Conversion de la réponse en JSON
      .then((data) => {
        // Recherche du projet correspondant à l'ID récupéré dans l'URL
        const projet = data.find((projet) => projet.id === id);
        setFicheProjet(projet);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du projet :", error);
        setLoading(false);
      });
  }, [id]); // Déclenchement de l'effet à chaque changement d'ID dans l'URL

  // Affichage d'un message de chargement en attendant la récupération des données
  if (loading) return <p>Chargement...</p>;

  // Redirection vers la page d'erreur si le projet n'existe pas
  if (!ficheProjet) return <Navigate replace to="/Error" />;

  return (
    <div className="fiche__projet">
      {/* Contenu principal du projet */}
      <div className="fiche__content">
        <h1>{ficheProjet.title}</h1>
        <p>{ficheProjet.description}</p>
      </div>

      {/* Section contenant les liens et icônes techniques */}
      <div className="fiche__aside">
        {/* Lien vers le dépôt GitHub du projet */}
        <a href={ficheProjet.lienrepo} aria-label="Github" target="_blank" rel="noopener noreferrer">
          <GithubIcone />
        </a>

        {/* Lien vers GitHub Pages du projet avec un texte explicite */}
<a href={ficheProjet.lienGitHubPages} aria-label="Voir le site en ligne" target="_blank" rel="noopener noreferrer" className="github-pages-link">
  Voir le site en ligne
</a>


        {/* Icônes des technologies utilisées */}
        <div className="fiche__technique">
          <HtmlCssIcone />
          <CssIcone />
          <ReactIcone />
          <JavascriptIcone/>
        </div>
      </div>

      {/* Carrousel d'images du projet */}
      <Carrousel slides={ficheProjet.pictures} />
    </div>
  );
};

export default FicheProjet;
