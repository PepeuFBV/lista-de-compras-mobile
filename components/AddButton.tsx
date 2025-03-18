import React from 'react'
import { Text, Pressable } from 'react-native'

const AddButton = () => {
    return (
        <Pressable className='w-[40px] h-[40px] bg-[#A881E6] rounded-full flex items-center justify-center shadow-lg'>
            <Text className='text-white text-3xl font-thin text-center mb-1.5'>+</Text>
        </Pressable>
    )
}

export { AddButton }
