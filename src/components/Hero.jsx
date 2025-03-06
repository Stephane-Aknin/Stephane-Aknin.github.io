import Social from "./Social";
import heroImage from "../images/profile.webp";

const Hero = () => {
  return (
    <div id="a-propos" className="hero__container">
      <div className="hero__content">
        {/* ✅ Ajout d'un h1 pour le SEO */}
        <h1 className="visually-hidden">Arnaud Guillemin - Développeur Web et Intégrateur</h1>

        <h2>À propos</h2>
        <p>
          Moi, c&apos;est <strong>Arnaud Guillemin</strong>,  
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
      
      {/* ✅ Optimisation de l'image */}
      <div className="hero__image">
        <picture>
          <source srcSet={heroImage} type="image/webp" />
          <img 
            src={heroImage} 
            alt="Photo de Arnaud Guillemin, Développeur Web et Intégrateur"
            loading="lazy" 
            width="300" 
            height="300"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
