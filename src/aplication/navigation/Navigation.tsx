import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createStackNavigator();

export function Navigation() {
  return (
    <Navigator>

      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Screen 
        name="Home"
        component={Home}
        options={{ headerShown: false }} 
      />

    </Navigator>
  );
}
