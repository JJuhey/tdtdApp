import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Label from '../Components/Label';

import ScreenLayout from '../Components/ScreenLayout';

const MainStack = createNativeStackNavigator();

const USER_SCREEN_LABELS = {
  READ_BOOK: '읽고 있는 책',
  DONE_BOOK: '읽은 책',
  FEEDBACK: '피드백 보내기',
  REVIEW: '앱 평점주기/리뷰',
  INTRODUCTION: '개발자 소개',
};

const AddScreen = () => {
  return (
    <View style={styles.addScreen}>
      <Text>Add Screen</Text>
    </View>
  );
};

const UserScreen = ({ navigation }: any) => {
  // temporary
  const totalReadBook = 2;
  const totalDoneBook = 4;

  const onClickLabel = (title: string) => {
    navigation.navigate(title);
  };

  return (
    <ScreenLayout>
      <View>
        <Label title={USER_SCREEN_LABELS.READ_BOOK} total={totalReadBook} />
        <Label title={USER_SCREEN_LABELS.DONE_BOOK} total={totalDoneBook} />
        <Label
          title={USER_SCREEN_LABELS.FEEDBACK}
          onClickLabel={onClickLabel}
        />
        <Label title={USER_SCREEN_LABELS.REVIEW} onClickLabel={onClickLabel} />
        <Label
          title={USER_SCREEN_LABELS.INTRODUCTION}
          onClickLabel={onClickLabel}
        />
      </View>
    </ScreenLayout>
  );
};

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="피드백 보내기" component={AddScreen} />
      <MainStack.Screen name="앱 평점주기/리뷰" component={AddScreen} />
      <MainStack.Screen name="개발자 소개" component={AddScreen} />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  addScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
});

export default MainStackScreen;
