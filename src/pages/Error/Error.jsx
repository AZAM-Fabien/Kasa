import * as S from "./Error.style";

function Error() {
  return (
    <S.layout>
      <S.h2> 404 </S.h2>
      <S.text>Oups! La page que vous demandez n&apos;existe pas.</S.text>
      <S.link to="/">Retourner sur la page d&apos;accueil</S.link>
    </S.layout>
  );
}

export default Error;
