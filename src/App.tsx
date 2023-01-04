import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import MainScreen from './Pages/MainScreen';
import SearchScreen from './Pages/SearchScreen';
import BookmarkScreen from './Pages/BookmarkScreen';
import UserScreen from './Pages/UserScreen';

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerTitle: '토닥토닥',
  headerStyle: { backgroundColor: '#F7F7F7' },
  headerTintColor: '#B0918C',
  headerShadowVisible: false,
};

const Tab = createBottomTabNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarIcon: ({ focused, color, size }) => {
          //   const iconName = focused
          //     ? 'ios-information'
          //     : 'ios-information-outline';

          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
        }}>
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={defaultScreenOptions}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={defaultScreenOptions}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={defaultScreenOptions}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={defaultScreenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
