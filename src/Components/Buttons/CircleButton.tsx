import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type PropsType = {
  title: string;
  onPress(): void;
}

const CircleButton = ({ onPress, title }: PropsType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FAD0C9',
    height: 50,
    width: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4 // 안드로이드에서만 사용
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
});

export default CircleButton
