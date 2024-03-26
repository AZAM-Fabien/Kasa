import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const ArrowR = styled.img`
  color: white;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const ArrowL = styled.img`
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
