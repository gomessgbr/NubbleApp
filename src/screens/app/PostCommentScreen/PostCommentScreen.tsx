import React from 'react';

import {usePostCommentList} from 'src/domain/PostComment/useCases/usePostCommentList';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const list = usePostCommentList(postId);

  return (
    <Screen canGoBack title="Comentários">
      <Box />
    </Screen>
  );
}
