import * as React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import type { CardProps } from './types';
import { Children } from 'react';

const CardStyled = styled.div<Pick<CardProps, 'size' | 'color'>>`
  width: 300px;
  height: 70px;
  color: ${(props) => props.theme.colors.info};
  background-color: #646cff;
`;

export const Card: React.FC<CardProps> = ({ children, color, size }) => {
  return <CardStyled>{children}</CardStyled>;
};
