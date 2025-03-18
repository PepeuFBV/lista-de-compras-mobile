import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import { Text, View } from 'react-native'
import { Tag } from '@/components/Tag'
import { DropdownDelete } from '@/components/DropdownDelete'
import type { Item as ItemData } from '@/types/item'

interface ItemProps {
    item: ItemData
    updateItem: (item: ItemData) => void
    deleteItem: (id: string) => void
}
const Item: React.FC<ItemProps> = ({ item, updateItem, deleteItem }) => {
    const { id, name, amount, unit, type } = item
    const [status, setStatus] = useState(item.status)

    async function handleCheckBoxClick() {
        const updatedItem: ItemData = { ...item, status: status === 'done' ? 'todo' : 'done' }
        try {
            await updateItem(updatedItem)
        } catch (error) {
            throw error
        }
    }

    function unitMapping(unit: string): string {
        if (unit === 'un' && amount > 1) return 'unidades'
        if (unit === 'un') return 'unidade'
        if (unit === 'un.' && amount > 1) return 'unidades'
        if (unit === 'un.') return 'unidade'
        if (unit === 'kg' && amount > 1) return 'quilos'
        if (unit === 'kg') return 'quilo'
        if (unit === 'l' && amount > 1) return 'litros'
        if (unit === 'l') return 'litro'
        return unit
    }

    return (
        <View className='w-full max-w-[720px] h-[68px] flex flex-row justify-between items-center space-x-10 bg-[#17171A] border border-[#252529] rounded-lg px-4 transition-colors duration-500 ease-in-out'>
            <View className='flex flex-row items-center justify-start space-x-4 mb-1 bg-transparent'>
                <CheckBox isChecked={status === 'done'} onClick={handleCheckBoxClick} style={{ width: 20, height: 20 }} checkBoxColor='#A881E6' />
                <View className='bg-transparent'>
                    <Text className='text-white text-base capitalize'>{name}</Text>
                    <Text className='text-[#AFABB6] text-xs'>{amount} {unitMapping(unit)}</Text>
                </View>
            </View>
            <View className='flex flex-row items-center justify-end'>
                <View className='mr-3'>
                    <Tag itemType={type} />
                </View>
                <DropdownDelete item={item} deleteItem={deleteItem} />
            </View>
        </View>
    )
}

export { Item }