import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Ex1FlatList() {
    const friends = [
        { name: 'gil', age: 16 },
        { name: 'dad', age: 51 },
        { name: 'bibi', age: 23 },
    ];
    const keyExtractor = (item, index) => item.name;

    const renderItem = (el) => <Text>{el.item.name},Age:{el.item.age}</Text>

    return (
        <View>
            <FlatList data={friends} keyExtractor={keyExtractor} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({})
