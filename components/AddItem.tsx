import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TextStyle } from 'react-native'
import { ItemsContext } from '@/context/ItemsContext'
import { AddButton } from '@/components/AddButton'
import { DropdownCategory } from '@/components/DropdownCategory'
import { UnitDropdown } from '@/components/UnitDropdown'
import { itemTypes } from '@/constants/Item-types'
import { Item, ItemRequest } from '@/types/item'
import { createItem } from '@/services/backend'

const AddItem = () => {
    const context = useContext(ItemsContext)

    if (!context) {
        throw new Error('Your Component must be used within a ContextProvider')
    }

    const { items, setItems } = context

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
    const [amount, setAmount] = useState<string>('1')
    const [unit, setUnit] = useState<string>('Un.')
    const [category, setCategory] = useState<string>('')
    const [error, setError] = useState<string>('')

    function resetValues() {
        setName('')
        setAmount('1')
        setUnit('Un.')
        setCategory('')
    }

    async function handleSubmit() {
        if (!name || !amount || !unit || !category) {
            setError('Todos os campos são obrigatórios.')
            return
        }
        const parsedUnit = (unit: string): string => {
            const amountAsNumber = parseInt(amount)
            if (unit === 'un' && amountAsNumber > 1) return 'unidades'
            if (unit === 'un') return 'unidade'
            if (unit === 'kg' && amountAsNumber > 1) return 'quilos'
            if (unit === 'kg') return 'quilo'
            if (unit === 'l' && amountAsNumber > 1) return 'litros'
            if (unit === 'l') return 'litro'
            return unit
        }

        const itemType = itemTypes.find(itemType => itemType.name === category)
        if (!itemType) {
            setError('Categoria inválida.')
            return
        }

        type PossibleTypes = 'Padaria' | 'Legume' | 'Fruta' | 'Bebida' | 'Carne'
        const newItem: ItemRequest = {
            name: name,
            type: category as PossibleTypes,
            amount: parseInt(amount),
            unit: parsedUnit(unit as string),
            status: 'todo'
        }

        await create(newItem)
        setError('')
        resetValues()
    }

    const visibility = error ? 'visible' : 'invisible'

    async function create(newItem: ItemRequest) {
        try {
            const item: Item = await createItem(newItem)
            setItems([...items, item])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View className='flex flex-col items-center space-y-2 mb-16'>
            <View className='w-full flex flex-col items-start gap-2 px-4'>
                <Text className='text-[#AFABB6]'>Item</Text>
                <TextInput
                    className='text-white pl-3'
                    style={[styles.textInput, focusTextInputStyle]}
                    value={text}
                    onFocus={() => handleFocus()}
                    onChange={(e) => setName(text)}
                    onChangeText={(text) => {
                        setText(text)
                        setName(text)
                    }}
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
                    <DropdownCategory setCategory={setCategory} />
                </View>
                <View className='mt-6'>
                    <AddButton onClick={handleSubmit} />
                </View>
            </View>
            <View className={visibility}>
                <Text className='text-red-500'>{error}</Text>
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
