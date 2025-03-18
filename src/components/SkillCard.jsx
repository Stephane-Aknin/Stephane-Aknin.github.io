

const SkillCard = () => {
  return (
    <div className="skill__card">
      <div className="s-card">
        <div className="s-card__icon">🌳</div>
        <div className="s-card__content">
          <h3>Élagage et Taille</h3>
          <p>Entretenir et former les arbres en toute sécurité</p>
        </div>
      </div>
      <div className="s-card">
        <div className="s-card__icon">🪓</div>
        <div className="s-card__content">
          <h3>Abattage</h3>
          <p>Supprimer les arbres dangereux ou malades</p>
        </div>
      </div>
      <div className="s-card">
        <div className="s-card__icon">🔗</div>
        <div className="s-card__content">
          <h3>Démontage</h3>
          <p>Retirer les arbres en zone difficile par morceaux</p>
        </div>
      </div>
      <div className="s-card">
        <div className="s-card__icon">🚜</div>
        <div className="s-card__content">
          <h3>Broyage et Évacuation</h3>
          <p>Gestion des déchets verts et nettoyage du site</p>
        </div>
      </div>
      
    </div>
  );
};

export default SkillCard;
