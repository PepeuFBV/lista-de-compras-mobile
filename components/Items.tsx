import React, { useContext } from 'react'
import { View } from 'react-native'
import { ItemsContext } from '@/context/ItemsContext'
import { Item } from '@/components/Item'
import { updateItem, deleteItem } from '@/services/backend'
import type { Item as ItemType } from '@/types/item'

const Items = () => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('useItems must be used within a ItemsProvider')
    }

    const { items, setItems } = context

    async function update(updatedItem: ItemType) {
        try {
            await updateItem(updatedItem.id, updatedItem)
            const updatedItems = items.map(item => {
                if (item.id === updatedItem.id) {
                    return updatedItem
                }
                return item
            })
            setItems(updatedItems)
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteI(id: string) {
        try {
            await deleteItem(id)
            setItems([...items.filter(item => item.id !== id)])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View className='w-full flex flex-col space-x-2 px-4 items-center'>
            {items.map(item => (
                <Item key={item.id} item={item} updateItem={update} deleteItem={deleteI} />
            ))}
        </View>
    )
}

export { Items }
