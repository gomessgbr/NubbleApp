import React from 'react';
import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';

import {Box, InfinityScrollList, Screen, Text} from '@components';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;

const ITEM_WITH =
  (SCREEN_WIDTH - ITEM_MARGIN - SCREEN_PADDING * 2) / NUM_COLUMNS;

export function FavoriteScreen() {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Box>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
        <Text semiBold>{item.author.username}</Text>
      </Box>
    );
  }
  return (
    <Screen flex={1}>
      <Text preset="headingSmall"> FavoriteScreen</Text>
      <InfinityScrollList
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        renderItem={renderItem}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'não há favoritos',
          errorMessage: 'erro ao carregar favoritos',
        }}
      />
    </Screen>
  );
}
