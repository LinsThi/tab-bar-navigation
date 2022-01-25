import { AntDesign } from '@expo/vector-icons';
import React from 'react';

import { COLORS } from '~/theme';

import * as S from './styles';

interface ButtonProps {
  size: number;
  focused: boolean;
}

export function ButtonNew({ size, focused }: ButtonProps) {
  return (
    <S.Container focused={focused}>
      <AntDesign name="plus" size={size} color={COLORS.white} />
    </S.Container>
  );
}
