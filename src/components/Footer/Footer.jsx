import * as S from "./Footer.style";
import { useState, useEffect } from "react";

function Footer() {
  const [src, setSrc] = useState("/assets/Kasa_copyright.svg");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setSrc("/assets/Kasa_copyright_mobile.svg");
      } else {
        setSrc("/assets/Kasa_copyright.svg");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.footerLayout>
      <img src="/assets/LOGO_blanc.svg" alt="logo Kasa" />
      <img src={src} alt="logo Kasa" />
    </S.footerLayout>
  );
}

export default Footer;
