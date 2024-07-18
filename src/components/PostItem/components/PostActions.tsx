import React from 'react';

import {Post, useReactToPost} from '@domain';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({post, postReactionType: 'favorite'});

  function likePost() {}
  function navigateToComments() {}
  function favoritePost() {}
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={likeReaction.hasReacted}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={post.reactionCount}
        onPress={likePost}
      />
      <Item
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={post.commentCount}
        onPress={navigateToComments}
      />
      <Item
        disabled={hideCommentAction}
        marked={favoriteReaction.hasReacted}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={post.favoriteCount}
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
  disabled?: boolean;
  text: number;
}
function Item({icon, marked, onPress, text, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
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
