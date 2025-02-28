import Social from "./Social";
import heroImage from "../images/profile.jpg";

const Hero = () => {
  return (
    <div id="a-propos" className="hero__container">
      <div className="hero__content">
        <h2>À propos</h2>
        <p>
  Moi, c&apos;est <strong>Arnaud Guillemin</strong>, Développeur Web et Intégrateur passionné.  
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
        <img src={heroImage} alt="Arnaud Guillemin" />
      </div>
    </div>
  );
};

export default Hero;
