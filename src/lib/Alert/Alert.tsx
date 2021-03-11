import React from "react";
import {
  AlertOctagon,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
} from "react-feather";
import styled from "styled-components";
import {
  AlertPrimary,
  AlertSuccess,
  AlertDanger,
  AlertWarning,
} from "./AlertTypes";

export interface IProps {
  type?: string;
  text: string;
  style?: React.CSSProperties;
}

const Alert: React.FC<IProps> = ({ type, text, style }) => {
  const renderText = (text: string) => {
    if (text.length <= 50) {
      return text;
    } else {
      return text.substring(0, 50) + "...";
    }
  };

  const Alert = styled.div`
    width: 50%;
    height: 8%;
    border-radius: 5px;
    color: #fff;
  `;

  const AlertIcon = styled.div`
    flex: 0;
    margin-left: 1rem;
    margin-right: 2rem;
    display: grid;
    place-items: center;
  `;

  const AlertText = styled.div`
    flex: 2;
  `;

  return (
    <>
      <Alert>
        <>
          {type === "primary" && (
            <AlertPrimary style={style}>
              <AlertIcon>{type === "primary" && <AlertOctagon />}</AlertIcon>
              <AlertText>
                <p>{renderText(text)}</p>
              </AlertText>
            </AlertPrimary>
          )}
          {type === "success" && (
            <AlertSuccess style={style}>
              <AlertIcon>{type === "success" && <CheckCircle />}</AlertIcon>
              <AlertText>
                <p>{renderText(text)}</p>
              </AlertText>
            </AlertSuccess>
          )}
          {type === "danger" && (
            <AlertDanger style={style}>
              <AlertIcon>{type === "danger" && <AlertCircle />}</AlertIcon>
              <AlertText>
                <p>{renderText(text)}</p>
              </AlertText>
            </AlertDanger>
          )}
          {type === "warning" && (
            <AlertWarning style={style}>
              <AlertIcon>{type === "warning" && <AlertTriangle />}</AlertIcon>
              <AlertText>
                <p>{renderText(text)}</p>
              </AlertText>
            </AlertWarning>
          )}
        </>
      </Alert>
    </>
  );
};

export default Alert;
