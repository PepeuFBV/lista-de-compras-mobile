import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TextStyle } from 'react-native'
import { AddButton } from '@/components/AddButton'
import { DropdownCategory } from '@/components/DropdownCategory'
import { UnitDropdown } from '@/components/UnitDropdown'

const AddItem = () => {
    const [text, setText] = useState<string>('')

    const [focusTextInputStyle, setFocusTextInputStyle] = useState<TextStyle | null>(null)

    function handleFocus() {
        if (focusTextInputStyle === styles.focusedInput) {
            setFocusTextInputStyle(null)
            return
        }
        setFocusTextInputStyle(styles.focusedInput)
    }

    const [name, setName] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const [unit, setUnit] = useState<string>('Un.')
    const

    return (
        <View className='flex flex-col items-center space-y-2 mb-16'>
            <View className='w-full flex flex-col items-start gap-2 px-4'>
                <Text className='text-[#AFABB6]'>Item</Text>
                <TextInput
                    className='text-white pl-3'
                    style={[styles.textInput, focusTextInputStyle]}
                    value={text}
                    onFocus={() => handleFocus()}
                    onChange={(e) => { }}
                    onChangeText={(text) => setText(text)}
                />
            </View>
            <View className='w-full flex flex-row items-center space-x-2'>
                <UnitDropdown
                    amount={amount}
                    unit={unit}
                    onAmountChange={setAmount}
                    onUnitChange={setUnit}
                />
                <View>
                    <DropdownCategory />
                </View>
                <View className='mt-6'>
                    <AddButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#252529',
    },
    focusedInput: {
        borderColor: '#A881E6',
    },
})

export { AddItem }
