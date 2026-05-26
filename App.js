import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/navigation/Stacknavigator'

function App () {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;