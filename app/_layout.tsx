import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/components/useColorScheme'

import { NativeWindStyleSheet } from 'nativewind'
import { ContextProvider } from '@/context/ItemsContext'

NativeWindStyleSheet.setOutput({
    default: 'native',
})

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Inter-Regular': require('@/assets/fonts/Inter_18pt-Regular.ttf'),
        'Inter-Bold': require('@/assets/fonts/Inter_18pt-Bold.ttf'),
        ...FontAwesome.font,
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return <RootLayoutNav />
}

function RootLayoutNav() {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ContextProvider>
                <Stack>
                </Stack>
            </ContextProvider>
        </ThemeProvider>
    )
}
