import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BoxModelComponent() {
    return (
        <View style={styles.container}>
            <View style={[styles.square, styles.red]}>
                <Text>
                    red
                </Text>
            </View>
            <View style={[styles.square, styles.blue]}>
                <Text>blue</Text>
            </View>
            <View style={[styles.square, styles.green]}>
                <Text>green</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    square: {
        width: 150,
        height: 150,
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue',
        top: 150
    },
    green: {
        backgroundColor: 'green'
    },
});
