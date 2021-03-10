import styled from "styled-components";

export const AlertPrimary = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #19456b;
  box-shadow: 0 3px 5px #222831;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AlertSuccess = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #27aa80;
  box-shadow: 0 3px 5px #222831;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AlertDanger = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ef4f4f;
  box-shadow: 0 3px 5px #222831;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const AlertWarning = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f77f00;
  box-shadow: 0 3px 5px #222831;
  font-family: ${(props) => props.theme.fontFamily};
`;
