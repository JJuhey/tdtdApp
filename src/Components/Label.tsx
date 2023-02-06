import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type PropsType = {
  title: string;
  total?: number;
  onClickLabel?: (title: string) => void;
};

const Label = (props: PropsType) => {
  const { title, total, onClickLabel } = props;

  const onPress = () => {
    if (onClickLabel) {
      onClickLabel(title);
    }
  };

  return (
    <>
      {onClickLabel ? (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{`${title}  ${total ?? ''}`}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontFamily: 'NotoSerifKR-Regular',
  },
});

export default Label;
