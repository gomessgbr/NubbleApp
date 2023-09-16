import {postCommentService} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();
  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'ocorreu um erro');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}
