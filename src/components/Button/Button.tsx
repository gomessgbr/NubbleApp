import {useTheme} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Theme} from '../../theme/theme';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity>
      <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
