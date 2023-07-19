import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Ng.Yw2c6gVCPAXYev6NJsc28yTBimdFITgWA4453pdAT3pBbsOVHAb8MExuf7fJ',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
