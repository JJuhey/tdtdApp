import React from 'react';
import { Image } from 'react-native';
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
          // tabBarShowLabel: false,
          tabBarLabelStyle: { color: '#A8A8A8' },
        }}>
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            ...defaultScreenOptions,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../assets/images/book_dark.png')
                    : require('../assets/images/book.png')
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            ...defaultScreenOptions,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../assets/images/search_dark.png')
                    : require('../assets/images/search.png')
                }
                style={{ width: 28, height: 28 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            ...defaultScreenOptions,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../assets/images/document_dark.png')
                    : require('../assets/images/document.png')
                }
                style={{ width: 26, height: 26 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            ...defaultScreenOptions,
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('../assets/images/user_dark.png')
                    : require('../assets/images/user.png')
                }
                style={{ width: 28, height: 28 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
