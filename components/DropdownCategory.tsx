import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { itemTypes } from '@/constants/Item-types'

const options = [
    { title: 'Padaria' },
    { title: 'Legume' },
    { title: 'Fruta' },
    { title: 'Bebida' },
    { title: 'Carne' }
]

function pickIcon(itemType: string) {
    const capitalizedItemType = itemType.charAt(0).toUpperCase() + itemType.slice(1)
    const tag = itemTypes.find(item => item.name === capitalizedItemType)
    return tag?.icon
}

interface DropdownCategoryProps {
    title?: string
    setCategory: (value: string) => void
}
const DropdownCategory: React.FC<DropdownCategoryProps> = ({ title = 'Categoria', setCategory }) => {
    return (
        <View style={{ flexDirection: 'column', gap: 8 }}>
            <Text className='text-[#AFABB6]'>{title}</Text>
            <SelectDropdown
                data={options}
                onSelect={(selectedItem, index) => {
                    setCategory(selectedItem.title)
                }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>

                            <Text className='flex-1 text-[#AFABB6]'>
                                {(selectedItem && selectedItem.title) || 'Selecione a categoria'}
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
    )
}

const styles = StyleSheet.create({
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

export { DropdownCategory }