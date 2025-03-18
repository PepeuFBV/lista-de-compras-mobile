import { ReactNode } from 'react'

type possibleTypes = 'Padaria' | 'Legume' | 'Fruta' | 'Bebida' | 'Carne'

type Item = {
    id: string
    name: string
    type: possibleTypes
    amount: number
    unit: string
    status: 'done' | 'todo'
}

type ItemRequest = {
    name: string
    type: possibleTypes
    amount: number
    unit: string
    status: 'done' | 'todo'
}

type ItemResponse = {
    _id: string
    name: string
    type: possibleTypes
    amount: number
    unit: string
    status: 'done' | 'todo'
}

type ItemType = {
    name: possibleTypes,
    icon: ReactNode,
    tagClassname: string,
    iconClassname: string
}

export type { Item, ItemRequest, ItemResponse, ItemType }
