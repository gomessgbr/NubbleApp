import React from 'react';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen canGoBack title="Comentários">
      <Box />
    </Screen>
  );
}
