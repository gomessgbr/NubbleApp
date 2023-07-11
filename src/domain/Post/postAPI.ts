import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  await new Promise(resolve =>
    setTimeout(() => resolve('carregando...'), 2000),
  );
  return postListMock;
}

export const postApi = {
  getList,
};
