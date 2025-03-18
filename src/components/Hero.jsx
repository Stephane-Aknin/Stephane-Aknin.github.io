import { memo } from 'react';
import Social from './Social';
import heroImage from '../images/image-zack.webp';

const Hero = () => {
  return (
    <div id="a-propos" className="hero__container">
      <div className="hero__content">
        <h1 className="visually-hidden">
          Stéphane Aknin - Arboriste grimpeur sur l&Iacute;le d&lsquo;Ol&eacute;ron
        </h1>

        <h2>&Agrave; propos</h2>
        <p>
          Bienvenue chez <strong>Stéphane Aknin Élagage</strong>, votre expert en gestion arboricole sur l&Iacute;le d&lsquo;Ol&eacute;ron. Gr&acirc;ce &agrave; plusieurs ann&eacute;es d&lsquo;exp&eacute;rience, je vous propose des services professionnels en mati&egrave;re de <strong>taille sanitaire</strong>, <strong>taille de cohabitation</strong>, <strong>taille architectur&eacute;e</strong>, ainsi que d&lsquo;<strong>abattage directionnel</strong> et de <strong>d&eacute;montage</strong>.
        </p>
        <p>
          Implant&eacute; au Ch&acirc;teau-d&lsquo;Ol&eacute;ron, je me d&eacute;place sur toute l&lsquo;&icirc;le pour r&eacute;pondre aux besoins des particuliers, des entreprises et des collectivit&eacute;s. Mon approche repose sur la s&eacute;curit&eacute;, la pr&eacute;cision et le respect de l&lsquo;environnement.
        </p>

        <h3>Nos services :</h3>
        <ul>
          <li>🌳 <strong>&Eacute;lagage et taille d&lsquo;arbres</strong> : Interventions de taille sanitaire, de cohabitation et architectur&eacute;e, pour assurer la sant&eacute; et la forme de vos arbres.</li>
          <li>🌲 <strong>Abattage d&lsquo;arbres dangereux</strong> : Techniques d&lsquo;abattage directionnel, assurant une chute ma&icirc;tris&eacute;e pour une s&eacute;curit&eacute; optimale.</li>
          <li>🌿 <strong>D&eacute;montage d&lsquo;arbres</strong> : Retrait d&lsquo;arbres en zones d&eacute;licates ou proches de b&acirc;timents avec ma&icirc;trise et s&eacute;curit&eacute;.</li>
          <li>🍃 <strong>Haubannage</strong> : Installation de haubans pour renforcer la stabilit&eacute; des arbres menac&eacute;s par des branches fragiles.</li>
          <li>🌱 <strong>Conseils en gestion arboricole</strong> : Accompagnement sur mesure pour pr&eacute;server et valoriser votre patrimoine arbor&eacute;.</li>
        </ul>

        <h3>Pourquoi choisir Stéphane Aknin Élagage ?</h3>
        <ul>
          <li>✔️ Expertise en taille sanitaire et architectur&eacute;e</li>
          <li>✔️ Abattage directionnel et techniques de d&eacute;montage ma&icirc;tris&eacute;es</li>
          <li>✔️ Haubannage pour renforcer la s&eacute;curit&eacute; des arbres</li>
          <li>✔️ Devis gratuits et personnalis&eacute;s</li>
        </ul>

        <p>
          Faites appel &agrave; un professionnel passionn&eacute; pour prendre soin de vos arbres, garantir leur sant&eacute; et assurer votre s&eacute;curit&eacute;. Contactez-moi pour toute demande de devis ou d&lsquo;informations suppl&eacute;mentaires !
        </p>

        <div className="social-container">
          <Social />
        </div>
      </div>

      <div className="hero__image">
        <picture>
          <source srcSet={heroImage} type="image/webp" media="(min-width: 768px)" />
          <img
            src={heroImage}
            alt="Photo de Stéphane Aknin, Arboriste grimpeur"
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
