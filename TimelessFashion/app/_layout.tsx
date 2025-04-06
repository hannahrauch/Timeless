import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Abhaya Libre Regular': require('../assets/fonts/AbhayaLibre-Regular.ttf'),
    'Bio Rhyme SemiBold': require('../assets/fonts/BioRhyme-SemiBold.ttf'),
  });

  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}} />
  </Stack>
}
