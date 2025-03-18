import React from 'react'
import { View, StyleSheet } from 'react-native'
import { itemTypes } from '@/constants/Item-types'

interface TagProps {
    itemType?: string
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Tag: React.FC<TagProps> = ({ itemType }) => {
    const capitalizedItemType = itemType ? capitalizeFirstLetter(itemType) : '';
    const tag = itemTypes.find(item => item.name === capitalizedItemType)
    const icon = itemType ? tag?.icon : null

    const backgroundColor = itemType ? tag?.bgColor : 'white'

    return (
        <View style={[styles.tagContainer, { backgroundColor }]}>
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 80,
    },
});

export { Tag }
