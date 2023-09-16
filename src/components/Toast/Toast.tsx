import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, useToastService, Toast as ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const position: Required<ToastType>['position'] = toast?.position || 'top';
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon color="success" name="checkRound" />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flexShrink: 1}}
        marginLeft="s16"
        preset="paragraphMedium"
        bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
