import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";

interface IProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: number;
  h?: number | "auto";
  w?: number | "auto";
  bg?: string;
  children?: ReactChild | ReactChildren;
  style?: React.CSSProperties;
}

const Grid: React.FC<IProps> = ({
  templateColumns,
  templateRows,
  gap,
  h,
  w,
  bg,
  children,
  style,
}) => {
  const Grid = styled.div`
    display: grid;
    font-family: ${(props) => props.theme.fontFamily};
    grid-template-columns: ${templateColumns};
    grid-template-rows: ${templateRows};
    grid-gap: ${gap}px;
    width: ${w}%;
    height: ${h}%;
    background-color: ${bg};
  `;

  return <Grid style={style}>{children}</Grid>;
};

export default Grid;
