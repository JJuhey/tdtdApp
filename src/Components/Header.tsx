import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        margin: 20,
        backgroundColor: '#F7F7F7',
      }}>
      <Text style={{ color: '#B0918C', fontSize: 22 }}>토닥토닥</Text>
    </View>
  );
};

export default Header;
