import * as S from "./About.style";
import Collapse from "/src/components/Collapse/Collapse.jsx";

function About() {
  return (
    <>
      <S.mainContainer>
        <S.h2Layout>
          <S.opacity>
            <S.h2>A propos</S.h2>
          </S.opacity>
        </S.h2Layout>

        <S.container>
          <Collapse
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            isOpen={false}
          ></Collapse>
          <Collapse
            title="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            isOpen={false}
          ></Collapse>
          <Collapse
            title="Service"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            isOpen={false}
          ></Collapse>
          <Collapse
            title="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            isOpen={false}
          ></Collapse>
        </S.container>
      </S.mainContainer>
    </>
  );
}

export default About;
