import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContentBox from '../Components/ContentBox';
import ScreenLayout from '../Components/ScreenLayout';

const MainStack = createNativeStackNavigator();

const MainScreen = () => {
  const title: string = '과거가 남긴 우울 미래가 보낸 불안';
  const text: string = `대체 잘 산다는 것이 무엇일까요? \n혹시 다른 사람들이 사는 모습과 비슷하게 살아야 한다고 생각하고 있지 않나요?`;
  const temporaryPhotoSrc: string = require('../../assets/images/temporary_book_image.png');

  return (
    <ScreenLayout>
      <ContentBox title={title} text={text} />
      <ContentBox title={title} text={text} photoSrc={temporaryPhotoSrc} />
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
    </MainStack.Navigator>
  );
}

export default MainStackScreen;
