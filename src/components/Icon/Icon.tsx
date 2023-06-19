import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Prop {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size}: Prop) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
