import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox, IconProps} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const likeReaction = useReactToPost({post, postReactionType: 'like'});

  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={likeReaction.hasReacted}
        text={likeReaction.reactionCount}
        onPress={likeReaction.reactToPost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
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
        text={favoriteReaction.reactionCount}
        onPress={favoriteReaction.reactToPost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
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
