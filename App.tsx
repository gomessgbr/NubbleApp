import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" style={{fontFamily: 'Satoshi-BlackItalic'}}>
          Texto Qualquer
        </Text>
        <Button title="Zica" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
