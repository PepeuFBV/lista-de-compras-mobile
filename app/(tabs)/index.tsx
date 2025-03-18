import { Text } from '@/components/Themed'
import { ScrollView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function TabOneScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => { // hidding the header
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])

    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className='bg-black'>
            <Text className='text-white'>Tab One</Text>
        </ScrollView>
    )
}