import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import ScreenLayout from '../Components/ScreenLayout';
import CircleButton from '../Components/Buttons/CircleButton';
import BookShape from '../Components/BookShape';

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: '#F7F7F7' },
  headerTitleStyle: { fontFamily: 'NotoSerifKR-Regular', fontSize: 18 },
  contentStyle: { backgroundColor: '#F7F7F7' },
  headerTintColor: '#B0918C',
  headerShadowVisible: false,
  headerBackTitleVisible: false,
};

const MainStack = createNativeStackNavigator();

const AddScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
      }}>
      <Text>Add Screen</Text>
    </View>
  );
};

const MainScreen = ({ navigation }: any) => {
  return (
    <ScreenLayout>
      <View>
        {/* <Text>Home Screen</Text> */}
        {/* <Button title="Go to add" onPress={() => navigation.navigate('Add')} /> */}
        <View style={{ marginBottom: 20, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
          <BookShape title="딸은 엄마의 감정을 먹고 자란다." />
          <BookShape title="내려놓음" />
          <BookShape title="트랜드 코리아 2023" />
        </View>
        <CircleButton  onPress={() => Alert.alert('heello')} title="+"/>
      </View>
    </ScreenLayout>
  );
};

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Add"
        component={AddScreen}
        options={{ ...defaultScreenOptions, headerTitle: '책 담기' }}
      />
    </MainStack.Navigator>
  );
}

export default MainStackScreen;
