import React from 'react';

import {SimpleLogo} from '@brand';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  const navigation = useNavigation();

  function navigateToSearchScreen() {
    navigation.navigate('SearchScreen');
  }
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      {/* <Box backgroundColor="carrotSecondary" height={16} width={70} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon onPress={navigateToSearchScreen} name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" size={16} />
        </Box>
        <Icon name="comment" size={16} />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
