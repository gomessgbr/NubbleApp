import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number) {
  const {data, isLoading, isFetching, isError, refetch} = useQuery({
    queryKey: [QueryKeys.PostGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30, // 30 seconds
  });

  return {
    post: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
