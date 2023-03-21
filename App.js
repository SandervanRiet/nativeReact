import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV_EVENTS, NAV_HOME, NAV_MOVIES} from "./navigation_constants";
import {MovieScreen} from "./screens/MoviesScreen";
import {MoviesProvider} from "./contexts/MoviesContext";
import {EventScreen} from "./screens/EventScreen";

function ProvidedApp() {
  const Stack = createNativeStackNavigator();
  return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={NAV_HOME} component={HomeScreen}/>
          <Stack.Screen name={NAV_MOVIES} component={MovieScreen}/>
            <Stack.Screen name={NAV_EVENTS} component={EventScreen}/>
        </Stack.Navigator>
      </>
  );
}


export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <MoviesProvider>
            <ProvidedApp/>
          </MoviesProvider>
        </SafeAreaProvider>
      </NavigationContainer>
  );
}
