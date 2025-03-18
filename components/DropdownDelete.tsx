import React, { useRef } from 'react'
import { View, StyleSheet, Pressable, Button } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { EllipsisVertical } from 'lucide-react-native'
import type { Item } from '@/types/item'

interface DropdownDeleteProps {
    item: Item
    buttonTitle?: string
    deleteItem: (id: string) => void
}
const DropdownDelete: React.FC<DropdownDeleteProps> = ({ item, buttonTitle = 'Deletar', deleteItem }) => {
    const dropdownRef = useRef<SelectDropdown>(null)

    function onDelete() {
        deleteItem(item.id)
        dropdownRef.current?.closeDropdown()
    }

    return (
        <View>
            <SelectDropdown
                ref={dropdownRef}
                data={[{ title: buttonTitle }]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    dropdownRef.current?.closeDropdown()
                }}
                renderButton={(selectedItem) => {
                    return (
                        <Pressable onPress={onDelete}>
                            <EllipsisVertical className='text-[#A881E6]' />
                        </Pressable>
                    )
                }}
                renderItem={(item) => {
                    return (
                        <View>
                            <Button title={item.title} onPress={onDelete} color='#A881E6' />
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#17171A',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#252529',
    },
    dropdownButtonArrowStyle: {
        fontSize: 20,
        color: '#AFABB6',
    },
    dropdownItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#17171A',
        borderBottomWidth: 1,
        borderBottomColor: '#252529',
    },
    dropdownMenuStyle: {
        width: 100,
        backgroundColor: '#17171A',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#252529',
    },
})

export { DropdownDelete }
