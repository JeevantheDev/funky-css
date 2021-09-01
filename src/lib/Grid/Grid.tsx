import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';

export interface IProps {
  templateColumns?: string;
  templateRows?: string;
  gap?: string;
  h?: string | 'auto';
  w?: string | 'auto';
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
    grid-gap: ${gap};
    width: ${w || '100%'};
    height: ${h || '100%'};
    background-color: ${bg};
  `;

  return <Grid style={style}>{children}</Grid>;
};

export default Grid;
