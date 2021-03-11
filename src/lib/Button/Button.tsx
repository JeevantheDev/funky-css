import React from "react";
import {
  PrimaryButton,
  SuccessButton,
  DangerButton,
  WarningButton,
} from "./ButtonTypes";
import styled from "styled-components";

export interface IProps {
  style?: React.CSSProperties;
  color?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ color, text, onClick, style }) => {
  const Button = styled.button`
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

  return (
    <>
      {color === "primary" && (
        <PrimaryButton style={style} onClick={onClick}>
          {text}
        </PrimaryButton>
      )}
      {color === "success" && (
        <SuccessButton style={style} onClick={onClick}>
          {text}
        </SuccessButton>
      )}
      {color === "danger" && (
        <DangerButton style={style} onClick={onClick}>
          {text}
        </DangerButton>
      )}
      {color === "warning" && (
        <WarningButton style={style} onClick={onClick}>
          {text}
        </WarningButton>
      )}
      {!color && (
        <Button style={style} onClick={onClick}>
          {text}
        </Button>
      )}
    </>
  );
};

export default Button;
