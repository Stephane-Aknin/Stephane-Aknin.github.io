import HtmlCssIcone from "../images/HtmlCssIcone";
import JavascriptIcone from "../images/JavascriptIcone";
import ReactIcone from "../images/ReactIcone";

const SkillCard = () => {
  return (
    <div className="skill__card">
      <div className="s-card">
        <HtmlCssIcone />
        <div className="s-card__content">
          <h3>HTML - CSS</h3>
          <p>Le squelette et le style de toutes pages</p>
        </div>
      </div>
      <div className="s-card">
        <JavascriptIcone />
        <div className="s-card__content">
          <h3>JavaScript</h3>
          <p>Rend les pages dynamiques et interactives</p>
        </div>
      </div>
      <div className="s-card">
        <ReactIcone />
        <div className="s-card__content">
          <h3>React</h3>
          <p>Création de composants et performances</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
