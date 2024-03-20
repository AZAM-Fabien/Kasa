import { housingList } from "../../Datas/Housing.js";
import * as S from "./Home.style";

function Home() {
  return (
    <div>
        <S.h2Layout>Chez vous, partout et ailleurs</S.h2Layout>

      <S.container>
        {housingList.map((housing) => (
          <S.article key={housing.id}>
              <S.img src={housing.cover} alt={housing.title} />
              <S.h3>{housing.title}</S.h3>
          </S.article>
        ))}
      </S.container>
    </div>
  );
}

export default Home;
