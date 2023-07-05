import React from 'react';

import {AppScreenProps} from 'src/routes/navigationtype';

import {Button, Screen, Text} from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Setting Screen</Text>
      <Button title="Settings" />
    </Screen>
  );
}
