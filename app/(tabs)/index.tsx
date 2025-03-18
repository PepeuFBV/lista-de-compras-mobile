import React, { useLayoutEffect } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Items } from '@/components/Items'
import { AddItem } from '@/components/AddItem'

export default function TabOneScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => { // hiding the header
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])

    return (
        <View style={[styles.mainView]}>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                style={[styles.scrollView]}
            >
                <Text className='text-white text-3xl mb-10'>Lista de Compras</Text>
                <AddItem />
                <Items />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        paddingTop: 80,
        backgroundColor: '#0c0c0d',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    scrollView: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
    },
})