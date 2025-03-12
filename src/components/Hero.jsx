import { memo } from 'react';
import Social from "./Social";
import heroImage from "../images/profile.webp";

const Hero = () => {
  return (
    <div id="a-propos" className="hero__container">
      <div className="hero__content">
        <h1 className="visually-hidden">
          Arnaud Guillemin - Développeur Web et Intégrateur
        </h1>

        <h2>À propos</h2>
        <p>
          Moi, c&apos;est <strong>Arnaud Guillemin</strong>,&nbsp;
          <strong className="highlighted-title">Développeur Web et Intégrateur</strong> passionné.  
          Basé à Bordeaux, je suis spécialisé dans la création de sites web modernes,
          intuitifs et adaptés à tous les écrans.
        </p>
        <p>
          Grâce à mon parcours, j&apos;ai pu affiner mes compétences en <strong>HTML, CSS, JavaScript et React</strong>.  
          Mon objectif ? Concevoir des expériences numériques fluides et performantes,
          tout en respectant les exigences et délais des projets.
        </p>
        <p>
          J&apos;accorde une grande importance à la collaboration et à la résolution de problèmes,
          des aspects essentiels pour proposer des solutions optimales aux utilisateurs.
        </p>

        <Social />
      </div>

      <div className="hero__image">
        <picture>
          <source srcSet={heroImage} type="image/webp" media="(min-width: 768px)" />
          <img
            src={heroImage}
            alt="Photo de Arnaud Guillemin, Développeur Web et Intégrateur"
            fetchPriority="high"
            loading="lazy"
            decoding="async"
            width="300"
            height="300"
          />
        </picture>
      </div>
    </div>
  );
};

export default memo(Hero);
