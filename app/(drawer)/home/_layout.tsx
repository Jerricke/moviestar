import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'tamagui';

const Layout = () => {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue7.get(),
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'MovieStar',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{
          title: '',
        }}
      />
    </Stack>
  );
};

export default Layout;
