import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/Register';

const {Screen, Navigator} = createStackNavigator();

export function Navigation() {

  return(
    <Navigator> 
        <Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
          />
    </Navigator>
  )
}