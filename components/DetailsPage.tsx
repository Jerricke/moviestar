import React from 'react';
import { View, Text } from 'react-native';

import { MediaType } from '~/interfaces/apiresults';

type DetailsPageProps = {
  id: string;
  mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  return (
    <View>
      <Text>DetailsPage</Text>
    </View>
  );
};

export default DetailsPage;
