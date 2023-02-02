import React from 'react';
import { Text, Image, Pressable, StyleSheet, Platform } from 'react-native';

type PropsType = {
  title: string;
  text: string;
  photoSrc?: any;
};

const ContentBox = (props: PropsType) => {
  const { title, text, photoSrc } = props;
  return (
    <Pressable
      style={[styles.box, photoSrc ? { height: 420 } : { height: 150 }]}>
      {photoSrc && <Image style={styles.photo} source={photoSrc} />}
      <Text style={styles.text} numberOfLines={5}>
        {text}
      </Text>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    ...Platform.select({
      android: {
        elevation: 15,
      },
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
    }),
  },
  photo: {
    width: '100%',
    height: '70%',
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '6E6E6D',
    fontFamily: 'NotoSerifKR-Regular',
  },
  title: {
    textAlign: 'center',
  },
});

export default ContentBox;
