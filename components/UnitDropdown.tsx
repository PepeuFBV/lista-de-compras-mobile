'use client'

import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TextStyle } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { itemTypes } from '@/constants/Item-types'

const options = [
    { title: 'Un.' },
    { title: 'L' },
    { title: 'Kg' },
]

function pickIcon(itemType: string) {
    const capitalizedItemType = itemType.charAt(0).toUpperCase() + itemType.slice(1)
    const tag = itemTypes.find(item => item.name === capitalizedItemType)
    return tag?.icon
}

interface UnitDropdownProps {
    amount: string
    unit: string
    onAmountChange: (value: string) => void
    onUnitChange: (value: string) => void
}
const UnitDropdown: React.FC<UnitDropdownProps> = ({ amount, unit, onAmountChange, onUnitChange }) => {
    const [focusTextInputStyle, setFocusTextInputStyle] = useState<TextStyle | null>(null)

    function handleFocus() {
        if (focusTextInputStyle === styles.focusedInput) {
            setFocusTextInputStyle(null)
            return
        }
        setFocusTextInputStyle(styles.focusedInput)
    }

    function handleAmmountChange(text: string) {
        const numericText = text.replace(/[^0-9]/g, '')
        onAmountChange(numericText)
    }

    return (
        <View className='flex flex-row space-x-0'>
            <View className='w-fit flex flex-col items-start space-y-2 pl-4'>
                <Text className='text-[#AFABB6]'>Quantidade</Text>
                <TextInput
                    className='max-w-[60px] text-white pl-3'
                    style={[styles.textInput, focusTextInputStyle]}
                    value={amount}
                    onFocus={handleFocus}
                    onChangeText={handleAmmountChange}
                />
            </View>
            <View className='w-full flex flex-col items-start pr-4 mt-[28px]'>
                <SelectDropdown
                    data={options}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>

                                <Text className='flex-1 text-[#AFABB6]'>
                                    {selectedItem && selectedItem.title}
                                </Text>
                                <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#252529' }) }}>
                                {pickIcon(item.title)}
                                <Text className='text-white'>{item.title}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
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
    dropdownButtonStyle: {
        width: 200,
        height: 40,
        backgroundColor: '#17171A',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 8,
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
        color: '#AFABB6',
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#17171A',
        borderWidth: 1,
        borderColor: '#252529',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center',
        paddingVertical: 8,
        gap: 8,
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
})

export { UnitDropdown }