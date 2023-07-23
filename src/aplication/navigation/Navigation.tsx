import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'

const { Screen, Navigator } = createStackNavigator();

export function Navigation() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

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
        options={{ headerShown: false }} />
    </Navigator>
  );
}
