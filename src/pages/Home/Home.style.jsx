import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const h2Layout = styled.div`
  position: relative;
  background-image: url(/assets/background_h2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 25px;
  width: 100%;
  height: 15.5vw;
`;

export const h2 = styled.h2`
  background: black;
  border-radius: 25px;
  height: 100%;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3.4vw;
  font-weight: 700;
  margin : 0;
`;

const gap = "4.4vw";

export const container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.theme.second};;
  border-radius: 25px;
  gap: ${gap};
  padding: 56px 50px;
  margin: 50px 0;
  box-sizing: border-box;
`;

export const link = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(33.33% - (${gap}*2) / 3);
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
  background-color: ${(props ) => props.theme.theme.primary60} ;
  border-radius: 5px;
  padding: 0.3vw 0.5vw 0.3vw 0.5vw;
  margin-right: 2vw;
  font-family: Montserrat;
  font-size: 1vw;
  font-weight: 700;
  line-height: 142.6%; /* 25.668px */
  position: absolute;
  bottom: 0vw;
  left: 1.4vw;
`;
