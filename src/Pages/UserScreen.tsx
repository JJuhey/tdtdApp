import React from 'react';
import { View } from 'react-native';
import ReadBookShape from '../Components/ReadBookShape';

import ScreenLayout from '../Components/ScreenLayout';

import ReadBooks from '../../assets/mockData';

const UserScreen = () => {
  return (
    <ScreenLayout>
      <View>
        <ReadBookShape readBooks={ReadBooks} />
      </View>
    </ScreenLayout>
  );
};

export default UserScreen;
