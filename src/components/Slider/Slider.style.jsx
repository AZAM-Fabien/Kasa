import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 29vw;
  object-fit: cover;
  object-position: center;
  border-radius: 25px;
  min-height: 225px
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
  transform: scaleX(-1) translateY(-50%);
`;
