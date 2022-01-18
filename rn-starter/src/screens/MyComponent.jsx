import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MyComponent() {
    return (
        <View>
            <Text style={styles.text}> my text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'red',
        fontSize:30
    }
})
