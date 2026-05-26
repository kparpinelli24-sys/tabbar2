import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
            <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333'
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 25,
        paddingHorizontal: 30,
        marginBottom: 10,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})