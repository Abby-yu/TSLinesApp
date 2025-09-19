// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TelexReleaseScreen from './src/screens/TelexReleaseScreen';
import TelexReleaseResultScreen from './src/screens/TelexReleaseResultScreen';
import TelexReleaseDetailScreen from './src/screens/TelexReleaseDetailScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TelexRelease" component={TelexReleaseScreen} />
        <Stack.Screen name="TelexReleaseResult" component={TelexReleaseResultScreen} />
        <Stack.Screen name="TelexReleaseDetail" component={TelexReleaseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;