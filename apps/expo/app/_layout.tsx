import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { Provider } from 'app/provider'
import { tamaguiFonts } from './tamaguiFonts.native'

export default function HomeLayout() {
  const theme = useColorScheme()

  const [loaded] = useFonts(tamaguiFonts)
  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider>
        <Stack
          screenOptions={{
            headerTitleStyle: {
              fontFamily: '$silkscreen',
            },
          }}
        />
        <StatusBar style="auto" />
      </Provider>
    </ThemeProvider>
  )
}
