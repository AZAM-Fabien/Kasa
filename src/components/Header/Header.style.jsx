import {Link as Baselink}  from "react-router-dom";
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
  width: 310px;
`;

export const link = styled(Baselink)`
  color: black;
  text-decoration: none;
`;


export const h1Invisible = styled.h1`
  display: none;
`;