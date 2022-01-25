import styled from 'styled-components/native';

import { COLORS } from '~/theme';

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  border-radius: 30px;
  background: ${({ focused }) => (focused ? COLORS.red : COLORS.light_red)};
  margin-bottom: 30px;
`;
