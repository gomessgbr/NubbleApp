import {PageAPI, PageParams, api} from '@api';

import {PostComment} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostComment>> {
  const response = await api.get<PageAPI<PostComment>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return response.data;
}

export const postCommentApi = {
  getList,
};
