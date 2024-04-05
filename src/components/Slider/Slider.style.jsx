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
  border-radius: 2.5vw;
  min-height: 225px;
`;

export const ArrowR = styled.img`
  color: white;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 3.4vw;
`;

export const ArrowL = styled.img`
  color: white;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: scaleX(-1) translateY(-50%);
  width: 3.4vw;
`;

export const Indicator = styled.div`
  color: white;
  position: absolute;
  bottom: 3vw;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;
