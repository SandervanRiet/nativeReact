import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV_EVENTS, NAV_HOME, NAV_MAPS, NAV_MOVIE_DETAILS, NAV_MOVIES} from "./navigation_constants";

import {MoviesProvider} from "./contexts/MoviesContext";
import {EventScreen} from "./screens/EventScreen";
import {MapsScreen} from "./screens/MapsScreen";
import {MoviesScreen} from "./screens/MoviesScreen";
import {MovieDetailsScreen} from "./screens/MovieDetailsScreen";

function ProvidedApp() {
  const Stack = createNativeStackNavigator();
  return (
      <>
        <Stack.Navigator>
            <Stack.Screen name={NAV_HOME} component={HomeScreen}/>
            <Stack.Screen name={NAV_MOVIES} component={MoviesScreen}/>
            <Stack.Screen name={NAV_EVENTS} component={EventScreen}/>
            <Stack.Screen name={NAV_MAPS} component={MapsScreen}/>
            <Stack.Screen name={NAV_MOVIE_DETAILS} component={MovieDetailsScreen}/>
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
