import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box className="flex-1 items-center justify-center p-4">
        <Text size="3xl" bold>
          Hello World
        </Text>
      </Box>
    </SafeAreaView>
  );
}

