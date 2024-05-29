import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;

const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen() {
  let {list} = useCameraRoll();

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        key={item}
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }
  return (
    <Screen canGoBack noPaddingHorizontal title="Novo post">
      <FlatList numColumns={NUM_COLUMNS} data={list} renderItem={renderItem} />
    </Screen>
  );
}
