import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ImageBackground } from 'react-native';
import Animated from 'react-native-reanimated';
import { Main, ScrollView, Image, YStack, H1, Text, Paragraph } from 'tamagui';

import { MediaType } from '~/interfaces/apiresults';
import { getMovieDetails } from '~/services/api';

type DetailsPageProps = {
  id: string;
  mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, mediaType),
  });
  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}` }}>
          <Animated.Image
            borderRadius={6}
            source={{ uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}` }}
            style={{ width: 200, height: 300, margin: 10 }}
            sharedTransitionTag={`${mediaType === 'movie' ? 'movie' : 'tv'}-${id}`}
          />
        </ImageBackground>
      </ScrollView>
      <YStack p={10} animation="lazy" enterStyle={{ opacity: 0, y: 0 }}>
        <H1 color="$blue7">
          {movieQuery.data?.title || movieQuery.data?.name}
          <Text fontSize={16}>
            (
            {new Date(
              movieQuery.data?.release_date! || movieQuery.data?.first_air_date!
            ).getFullYear()}
            )
          </Text>
        </H1>
        <Paragraph theme="alt2">{movieQuery.data?.tagline}</Paragraph>
        <Text fontSize={16}>{movieQuery.data?.overview}</Text>
      </YStack>
    </Main>
  );
};

export default DetailsPage;
