import { ItemRequest } from '@/types/item'
import { Item, ItemResponse } from '@/types/item'

const route = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001'
const commonHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
}

async function getItems(): Promise<Item[]> {
    try {
        const response = await fetch(`${route}/items`, {
            method: 'GET',
            headers: commonHeaders
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()

        if (!Array.isArray(data.items)) {
            throw new Error('Expected data.items to be an array')
        }

        const items: Item[] = data.items.map((item: ItemResponse) => {
            return {
                id: item._id as string,
                name: item.name as string,
                type: item.type as string,
                amount: item.amount as number,
                unit: item.unit as string,
                status: item.status as string
            }
        })
        return items
    } catch (error) {
        throw error
    }
}

async function createItem(item: ItemRequest) {
    try {
        const newItem = { // parsing to lowercase to match the backend schema
            name: item.name.toLowerCase(),
            type: item.type.toLowerCase(),
            amount: item.amount,
            unit: item.unit.toLowerCase(),
            status: item.status.toLowerCase()
        }
        if (newItem.unit === 'un' || newItem.unit === 'un.' || newItem.unit === 'unidade') newItem.unit = 'unidades'
        else if (newItem.unit === 'kg') newItem.unit = 'quilos'
        else if (newItem.unit === 'l') newItem.unit = 'litros'
        const response = await fetch(`${route}/items`, {
            method: 'POST',
            headers: commonHeaders,
            body: JSON.stringify(newItem)
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

async function updateItem(id: string, item: ItemRequest) {
    try {
        const updatedItem = { // parsing to lowercase to match the backend schema
            _id: id,
            name: item.name.toLowerCase(),
            type: item.type.toLowerCase(),
            amount: item.amount,
            unit: item.unit.toLowerCase(),
            status: item.status.toLowerCase()
        }
        const response = await fetch(`${route}/items/${id}`, {
            method: 'PUT',
            headers: commonHeaders,
            body: JSON.stringify(updatedItem)
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

async function deleteItem(id: string) {
    try {
        const response = await fetch(`${route}/items/${id}`, {
            method: 'DELETE',
            headers: commonHeaders
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export { getItems, createItem, updateItem, deleteItem }
