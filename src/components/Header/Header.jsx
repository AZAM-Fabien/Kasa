import * as S from "./Header.style";

function Header() {
  // console.log (location.pathname)
  // const isHomePage = location.href === "http://localhost:5173/"
  // Useeffect à utiliser ?
  // regarder avec react router

  return (
    <S.headerLayout>
      <S.h1Invisible>Kasa</S.h1Invisible>
      <img src="\src\assets\LOGO.svg" alt="logo Kasa" />
      <S.nav>
        <S.link to="/">Accueil</S.link>
        <S.link to="/a-propos">A propos</S.link>
      </S.nav>
    </S.headerLayout>
  );
}

export default Header;
