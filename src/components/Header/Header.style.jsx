import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const headerLayout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  padding-bottom : 50px;
`;

export const nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 57px;
`;

export const link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    text-decoration-line: underline;
  }
`;


export const h1Invisible = styled.h1`
  display: none;
`;