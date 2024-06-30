import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<OnboardingPageProps, 'onPressNext' | 'onPressSkip'>;

/* hitSlop = aumenta a area de click do PressableBox */

export function BottomMenu({onPressNext, onPressSkip}: BottomMenuProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text>Pular</Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Box flexDirection="row" alignItems="center">
          <Text mr="s4">Próximo</Text>
          <Icon name="arrowRight" />
        </Box>
      </PressableBox>
    </Box>
  );
}
