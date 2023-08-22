import {Post, PostAPI} from './postTypes';

/**
 * @description Adapter for PostAPI model Post
 */

function toPost(postAPI: PostAPI): Post {
  return {
    id: postAPI.id,
    text: postAPI.text,
    author: {
      profileURL: postAPI.user.profile_url,
      name: postAPI.user.full_name,
      userName: postAPI.user.username,
      id: postAPI.user.id,
    },
    imageURL: postAPI.image_url,
    reactionCount: parseInt(postAPI.meta.like_count, 10),
    commentCount: parseInt(postAPI.meta.comments_count, 10),
    favoriteCount: parseInt(postAPI.meta.favorite_count, 10),
  };
}

export const postAdapter = {toPost};
