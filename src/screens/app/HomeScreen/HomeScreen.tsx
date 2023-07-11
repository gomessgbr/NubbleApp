import React, {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  console.log(navigation);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  return (
    <Screen>
      {postList.map(post => (
        <Text>{post.text}</Text>
      ))}
    </Screen>
  );
}
