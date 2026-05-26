import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}
        >
            <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
        >
            <Text style={styles.buttonText}>Go to Profile</Text>
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
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
marginBottom: 10,
elevation: 2,
},
buttonText: {   
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});
export default HomeScreen;