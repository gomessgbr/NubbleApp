import React from 'react';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppTabBottomTabParamList} from 'src/routes/AppTabNavigator';

import {Button, Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

type AppTabScreenProps = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, 'HomeScreen'>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;

export function HomeScreen({navigation}: AppTabScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
