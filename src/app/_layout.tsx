import '../global.css';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <GluestackUIProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}

