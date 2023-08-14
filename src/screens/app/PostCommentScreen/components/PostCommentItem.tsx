import React from 'react';

import {PostComment} from '@domain';
import {dateUtils} from '@utils';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageUrl={postComment.author.profileURL} />
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message} -{' '}
          {dateUtils.formatRelative(postComment.createdAt)}
        </Text>
      </Box>
    </Box>
  );
}
