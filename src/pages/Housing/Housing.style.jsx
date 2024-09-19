import styled from "styled-components";

export const Main = styled.div`
  flex: 1;
  `;

export const Layout1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 24px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Layout2 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.theme.primary};
  font-size: 36px;
  font-weight: 500;
  line-height: 142.6%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Location = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 142.6%;
  color: #000000;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6060;
  border-radius: 10px;
  height: 25px;
  min-width: 115px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 1020px) {
    font-size: 1.4vw;
    min-width: 10vw;
  }

  @media (max-width: 768px) {
    min-width: 84px;
    font-size: 10px;
  }
`;

export const Layout3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Host = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
`;

export const HostSeparteName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HostName = styled.h4`
  color: ${(props) => props.theme.theme.primary};
  font-size: 18px;
  font-weight: 500;
  line-height: 142.6%;
  margin: 0;
`;

export const HostPicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Layout4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4vw;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
