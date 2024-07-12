import React from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {InfinityScrollList, Screen, Text} from '@components';

export function FavoriteScreen() {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{uri: item.post.imageURL}}
        style={{width: 300, height: 300}}
      />
    );
  }
  return (
    <Screen flex={1}>
      <Text preset="headingSmall"> FavoriteScreen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{}}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
