import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;
export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box>
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          mb="s24"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Icon name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
          {title && <Text preset="headingSmall">{title}</Text>}
          {title && <Box width={20} />}
        </TouchableOpacityBox>
      )}
    </Box>
  );
}
