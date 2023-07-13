import React from 'react';

import {Post} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = Pick<Post, 'reactionCount' | 'favoriteCount' | 'commentCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {}
  function navigateToComments() {}
  function favoritePost() {}
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
        onPress={likePost}
      />
      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        onPress={navigateToComments}
      />
      <Item
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        onPress={favoritePost}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };

  text: number;
}
function Item({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      flexDirection="row"
      onPress={onPress}
      mr="s24">
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
