import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}

export function PostCommentItem({
  postId,
  postComment,
  postAuthorId,
  userId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({
        message: 'Comentário deletado',
      });
    },
  });
  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Desaja Excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {},
      },
    ]);
  }
  return (
    <Pressable
      testID="post-comment-id"
      disabled={!isAllowToDelete}
      onLongPress={confirmRemove}>
      <Box
        paddingHorizontal="s24"
        flexDirection="row"
        alignItems="center"
        mb="s16">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
