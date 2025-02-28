import GithubIcone from "../images/GithubIcone";
import LinkedinIcone from "../images/LinkedinIcone";
const Social = () => {
  return (
    <div className="social__container">
      <a
        href="https://github.com/GlMlL?tab=repositories"
        aria-label="Github"
        target="_blank"
      >
        <GithubIcone />
      </a>
      <a
        href="https://www.linkedin.com/in/arnaud-guillemin-464100260/"
        aria-label="Linkedin"
        target="_blank"
      >
        <LinkedinIcone />
      </a>
    </div>
  );
};

export default Social;
