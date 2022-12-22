import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const defaultScreenOptions: NativeStackNavigationOptions = {
  title: '토닥토닥',
  headerStyle: {
    backgroundColor: '#F7F7F7',
  },
  headerTintColor: '#B0918C',
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '400',
  },
  contentStyle: {
    backgroundColor: '#F7F7F7',
  },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
};

function MainScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </View>
  );
}

function UserScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={defaultScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
