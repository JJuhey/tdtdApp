import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './Header';

const ScreenLayout = ({ children }: any) => {
  return (
    <View
      style={{
        paddingTop: 50,
        backgroundColor: '#F7F7F7',
        flex: 1,
      }}>
      <ScrollView>
        <Header />
        <View style={{ marginLeft: 20 }}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default ScreenLayout;
