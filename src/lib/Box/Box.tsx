import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';

enum VARIANT {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
}

export interface IProps {
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
  color?: VARIANT | string;
  h?: string | 'auto';
  w?: string;
  flex?: number;
  alignSelf?: string;
  start?: number;
  rowEnd?: number;
  colEnd?: number;
  style?: React.CSSProperties;
  children?: ReactChild | ReactChildren;
}

const Box: React.FC<IProps> = ({
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
  flex,
  alignSelf,
  start,
  rowEnd,
  colEnd,
  style,
  children,
}) => {
  const Box = styled.div`
    width: ${w};
    height: ${h};
    ${(props) => {
      switch (color) {
        case VARIANT.primary:
          return `
            background-color: ${props.theme.palette.primary.main};
          `;
        case VARIANT.success:
          return `
            background-color: ${props.theme.palette.success.main};
          `;
        case VARIANT.danger:
          return `
            background-color: ${props.theme.palette.danger.main};
          `;
        case VARIANT.warning:
          return `
            background-color: ${props.theme.palette.warning.main};
          `;
        default:
          return `
            background-color: ${props.theme.palette.primary.main};
          `;
      }
    }}
    font-family: ${(props) => props.theme.fontFamily};
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
    flex: ${flex};
    align-self: ${alignSelf};
    grid-row: ${start} / ${rowEnd};
    grid-column: ${start} / ${colEnd};
  `;
  return <Box style={style}>{children}</Box>;
};

export default Box;
