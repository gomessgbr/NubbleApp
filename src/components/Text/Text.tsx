import React from 'react';

import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  italic,
  semibold,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semibold);
  return (
    <RNText style={[style, {fontFamily}, $fontSizes[preset]]} {...rest}>
      {children}
    </RNText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semibold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  if (!!bold && !!italic) {
    return $fontFamily.italic;
  }
  if (bold) {
    return $fontFamily.bold;
  }
  if (italic) {
    return $fontFamily.italic;
  }
  if (!!semibold && !!italic) {
    return $fontFamily.mediumItalic;
  }
  if (semibold) {
    return $fontFamily.medium;
  }
  return $fontFamily.regular;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};
