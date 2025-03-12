import { useEffect, useState } from "react"; 
import OpenclassroomIcone from "../images/OpenclassroomIcone"; 
import { Link } from "react-router-dom"; // Import du composant Link pour la navigation entre les pages

const WorkCard = () => {
  const [projets, setProjets] = useState([]); // État pour stocker la liste des projets
  const [loading, setLoading] = useState(true); // État pour gérer le chargement des données

  useEffect(() => {
    // Récupération des données des projets depuis le fichier JSON
    fetch("/porfolio/annexes/projets.json")
      .then((response) => response.json())
      .then((data) => {
        setProjets(data); // Mise à jour de l'état avec les projets récupérés
        setLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des projets :", error);
        setLoading(false); // Arrêt du chargement en cas d'erreur
      });
  }, []); // Le useEffect s'exécute une seule fois au montage du composant

  if (loading) return <p>Chargement...</p>; // Affichage du message de chargement tant que les données ne sont pas disponibles

  return (
    <div className="work__card">
      {/* Parcours de la liste des projets et affichage de chaque projet sous forme de carte */}
      {projets.map((projet) => (
        <div className="w-card" key={projet.id}>
          <article>
            <Link to={`/projet/${projet.id}`}> {/* Lien vers la page du projet */}
              <OpenclassroomIcone /> {/* Icône associée au projet */}
              <div className="w-card__content">
                <h3>{projet.littletitle}</h3> {/* Titre court du projet */}
                <p>{projet.littledescription}</p> {/* Courte description du projet */}
              </div>
            </Link>
          </article>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
