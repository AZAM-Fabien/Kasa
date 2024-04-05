import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const headerLayout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  padding-bottom: 50px;
`;

export const img = styled.img`
  width: 38vw;
  max-width: 210px;
`;

export const nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 57px;

  @media (max-width: 768px) {
    gap: 26px;
  }
`;

export const link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;

  &.active {
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 0.3em;

    @media (max-width: 768px) {
      text-decoration-thickness: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 3vw;
    text-transform: uppercase;

  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const h1Invisible = styled.h1`
  display: none;
`;
