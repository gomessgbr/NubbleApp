import React from 'react';
import {Image} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen, Text} from '@components';

export function NewPostScreen() {
  let {list} = useCameraRoll();
  return (
    <Screen scrollable>
      <Text preset="headingSmall">New Post Screen</Text>
      {list.map(photo => (
        <Image
          key={photo}
          source={{uri: photo}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 200, height: 200}}
        />
      ))}
    </Screen>
  );
}
