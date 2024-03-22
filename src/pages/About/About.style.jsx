import styled from "styled-components";


export const mainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const h2Layout = styled.div`
  position: relative;
  background-image: url(src/assets/background_a_propos.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
  width: 100%;
  height: 15.5vw;
  margin-bottom: 38px;
`;

export const opacity = styled.div`
  background: black;
  border-radius: 25px;
  height: 100%;
  opacity: 0.3;
  margin : 0;
`;

export const h2 = styled.h2`
  display: none;
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width : 84%;
  gap: 30px;
  margin-bottom: 38px;
`;
