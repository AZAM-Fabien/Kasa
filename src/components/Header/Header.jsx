import * as S from "./Header.style";

function Header() {
  return (
    <S.headerLayout>
      <S.h1Invisible>Kasa</S.h1Invisible>
      <S.img src="/assets/LOGO.svg" alt="logo Kasa" />
      <S.nav>
        <S.link to="/">Accueil</S.link>
        <S.link to="/a-propos">A propos</S.link>
      </S.nav>
    </S.headerLayout>
  );
}

export default Header;
