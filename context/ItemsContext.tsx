'use client'

import React, { createContext, useState, useEffect } from 'react'
import { getItems } from '@/services/backend'
import type { Item } from '@/types/item'

interface ItemsContextType {
    items: Item[]
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}
export const ItemsContext = createContext<ItemsContextType | undefined>(undefined)

interface ContextProviderProps {
    children: React.ReactNode
}
export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([])

    async function loadItems() {
        try {
            const initialItems = await getItems()
            setItems(initialItems)
        } catch (error) {
            console.error('Failed to load initial items:', error)
        }
    }

    useEffect(() => {
        loadItems()
    }, [])

    return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>
}

export default ContextProvider
