import React from 'react'
import { Text, Pressable } from 'react-native'

interface AddButtonProps {
    onClick: () => void
}
const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <Pressable className='w-[40px] h-[40px] bg-[#A881E6] rounded-full flex items-center justify-center shadow-lg' onPress={onClick}>
            <Text className='text-white text-3xl font-thin text-center mb-1.5'>+</Text>
        </Pressable>
    )
}

export { AddButton }
