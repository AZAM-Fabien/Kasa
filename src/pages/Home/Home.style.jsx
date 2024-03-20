import styled from "styled-components";

export const h2Layout = styled.h2`
  background-image: url("src/assets/images/background_h2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #f40b0b;
  text-align: center;
  padding: 3.5vw 0 3.5vw 0;
  width: 100%;

`;

const gap = "4.2vw";

export const container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  gap: ${gap};
  padding: 56px 50px;
`;

export const article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(33% - (${gap}*2)/3);
  aspect-ratio: 1/1;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const h3 = styled.h3`
  color: #fff;
  background-color: ${(props) => props.theme.red_background.primary};
  border-radius: 10px;
  padding: 0.5vw 0.5vw 0.5vw 0.5vw;
  margin-right: 2vw;
  font-family: Montserrat;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 25.668px */
  position: absolute;
  bottom: 0vw;
  left: 1.4vw;
`;
