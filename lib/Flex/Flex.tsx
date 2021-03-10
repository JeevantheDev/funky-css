import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";

interface IProps {
  style?: React.CSSProperties;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  color?: string;
  h: number;
  w: number;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  alignSelf?: string;
  flexWrap?: string;
  children?: ReactChild | ReactChildren;
}

const Flex: React.FC<IProps> = ({
  color,
  h,
  w,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  flexWrap,
  children,
  style,
}) => {
  const Flexbox = styled.div`
    width: ${w}%;
    height: ${h}%;
    background-color: ${color};
    margin: ${m}px;
    margin-top: ${mt}px;
    margin-bottom: ${mb}px;
    margin-left: ${ml}px;
    margin-right: ${mr}px;
    padding: ${p}px;
    padding-top: ${pt}px;
    padding-bottom: ${pb}px;
    padding-left: ${pl}px;
    padding-right: ${pr}px;
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    align-self: ${alignSelf};
    flex-wrap: ${flexWrap};
    font-family: ${(props) => props.theme.fontFamily};
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  `;

  return <Flexbox style={style}>{children}</Flexbox>;
};

export default Flex;
