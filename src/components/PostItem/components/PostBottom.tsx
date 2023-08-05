import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
  const navigation = useNavigation();

  const commentText = getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    });
  }
  return (
    <Box mt="s16">
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text preset="paragraphMedium">{text}</Text>
      {!!commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          mt="s8"
          bold
          preset="paragraphSmall"
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
