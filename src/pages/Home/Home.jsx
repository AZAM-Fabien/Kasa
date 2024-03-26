import { housingList } from "/src/Datas/Housing.js";
import * as S from "./Home.style";

function Home() {
  return (
    <div>
      <S.h2Layout>
        <S.h2>Chez vous, partout et ailleurs</S.h2>
      </S.h2Layout>

      <S.container>
        {housingList.map((housing) => (
          <S.link key={housing.id} to={`/Logements/${housing.id}`}>
            <S.img src={housing.cover} alt={housing.title} />
            <S.h3>{housing.title}</S.h3>
          </S.link>
        ))}
      </S.container>
    </div>
  );
}

export default Home;
