import React from 'react'
import type { ItemType } from '@/types/item'
import { Apple, Beef, Carrot, Milk, Sandwich } from 'lucide-react-native'

const itemTypes: ItemType[] = [
    {
        name: 'Padaria',
        icon: <Sandwich size={16} color='#BB9F3A' />,
        bgColor: '#211E12'
    },
    {
        name: 'Legume',
        icon: <Carrot size={16} color='#8CAD51' />,
        bgColor: '#1C2015'
    },
    {
        name: 'Fruta',
        icon: <Apple size={16} color='#E07B67' />,
        bgColor: '#261A17'
    },
    {
        name: 'Bebida',
        icon: <Milk size={16} color='#7B94CB' />,
        bgColor: '#1A1D23'
    },
    {
        name: 'Carne',
        icon: <Beef size={16} color='#DB5BBF' />,
        bgColor: '#251622'
    }
]

export { itemTypes }
