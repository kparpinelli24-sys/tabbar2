import { create, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetalisScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const StackNavigator  = () => {
return (
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Details" component={DetailsScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
);
};
export default StackNavigator;
