import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function MovieScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});
