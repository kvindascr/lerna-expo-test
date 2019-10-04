import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sum }  from '@test/common-lib';
import { InnerScreen } from './src/InnerScreen';

export default function App() {
    const result = sum(7,25);
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>This is a sum {result}</Text>
            <InnerScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
