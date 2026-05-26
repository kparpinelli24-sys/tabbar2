import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <TouchableOpacity 
               style={styles.button}
                onPress={() => navigation.push('Details')}
            >
                <Text style={styles.buttonText}>Go to Details... again</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 10,   
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailsScreen;