import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ButtonComponent({ navigation }) {
    const [isDisplay, setIsDisplay] = useState(false)
    const onClick = () => {
        setIsDisplay(!isDisplay);
    }
    const onOpacityPress = () => {
        console.log('opacity pressed');
        navigation.navigate('List')
    }
    return (
        <View>
            <Button title='click m' onPress={onClick} />
            {isDisplay && <Text>i'm a hidden text</Text>}
            <TouchableOpacity onPress={onOpacityPress}>
                <Text>Move to list</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
