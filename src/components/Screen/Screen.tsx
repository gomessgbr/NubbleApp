import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
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
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
