import * as React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonProps } from './types';

const ButtonStyled = styled.button<Pick<ButtonProps, 'size' | 'color'>>`
  color: ${(props) => props.theme.colors[props.color]};
  width: 100px;
  height: 40px;
  background-color: cadetblue;
`;

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  color,
  fill,
  size,
  disabled,
  type,
  onClick,
  children,
}) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <ButtonStyled
      color={color}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {children}
    </ButtonStyled>
  );
};
