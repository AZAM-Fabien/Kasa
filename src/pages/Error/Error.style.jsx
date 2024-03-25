import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const layout = styled.div`
  display: flex;
  padding-top: 89px;
  padding-bottom: 139px;
  flex-direction: column;
  align-items: center;
  gap: 139px;
`;

export const h2 = styled.h2`
  color: ${(props) => props.theme.theme.primary};
  text-align: center;
  font-size: 288px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%;
  margin: 0;
`;

export const text = styled.p`
  color: ${(props) => props.theme.theme.primary};
  font-size: 36px;
  font-weight: 500;
  line-height: 142.6%;
`;

export const link = styled(NavLink)`
  color: black;
  text-decoration-line: underline;
  font-size: 18px;
  font-weight: 500;
  line-height: 142.6%;
`;
