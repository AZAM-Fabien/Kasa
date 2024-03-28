import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.theme.primary};
  border-radius: 5px;
  padding: 10px 20px 10px 15px;
`;

export const Title = styled.div`
  color: white;
  border-radius: 15px;
  font-size: 24px;
  font-weight: 700;
`;

export const Arrow = styled.img`
  color: white;
`;

export const Description = styled.div`
  color: black;
  background-color: ${(props) => props.theme.theme.second};
  border-radius: 5px;
  overflow: hidden;
  transition: max-height 400ms ease-in-out;
  max-height: ${(props) => props.style.maxHeight};
`;

export const TextDescription = styled.div`
  margin: 10px 20px 10px 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: 142.6%;
`;
