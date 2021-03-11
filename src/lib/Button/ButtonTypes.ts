import styled from "styled-components";

export const PrimaryButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  color: #fff;
  transition: all 0.5s ease;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0 3px 5px ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SuccessButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  color: #fff;
  transition: all 0.5s ease;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.palette.success.main};
  box-shadow: 0 3px 5px ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const DangerButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  color: #fff;
  transition: all 0.5s ease;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.palette.danger.main};
  box-shadow: 0 3px 5px ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const WarningButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 2.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  color: #fff;
  transition: all 0.5s ease;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.palette.warning.main};
  box-shadow: 0 3px 5px ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
