import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast: boolean;
};

/* hitSlop = aumenta a area de click do PressableBox */

export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nextText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        flexDirection="row"
        alignItems="center"
        onPress={onPressNext}>
        <Box flexDirection="row" alignItems="center">
          <Text bold mr="s4">
            {nextText}
          </Text>
          <Icon name="arrowRight" color="carrotSecondary" />
        </Box>
      </PressableBox>
    </Box>
  );
}
