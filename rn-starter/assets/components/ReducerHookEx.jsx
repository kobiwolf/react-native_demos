'use strict'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {

}

export default function ReducerHookEx() {
    const defaulsInput = {
        style: {
            borderColor: 'red',
            borderWidth: 1
        }
    }
    // const [state, dispatch] = useReducer(reducer, { first: 1, second: 1, third: 1 })
    const [input, setInput] = useState('');
    return (
        <View>
            {/* <Text>first:{state.first}</Text>
            <Text>second:{state.second}</Text>
            <Text>third:{state.third}</Text> */}
            <TextInput {...defaulsInput} onChange={(e) => setInput(e.target.value)} autoCapitalize='words' autoCorrect={false} />
            <Text>{input}</Text>
            {input.length > 5 && <Text>long name</Text>}
        </View>
    );
}

const styles = StyleSheet.create({

});
