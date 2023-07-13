import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';

import {Post, postService} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  console.log(navigation);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{uri: item.author.profileURL}}
            style={{width: 40, height: 40}}
          />
          <Text>{item.author.userName}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{
            width: Dimensions.get('screen').width,
            height: 300,
          }}
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
