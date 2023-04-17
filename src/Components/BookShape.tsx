import React from 'react';
import { Text, View } from 'react-native';

type PropsType = {
  title: string;
  width?: number;
  height?: number;
}

const BookShape = (props: PropsType) => {
  const { title, width, height } = props
  return (
    <View
      style={{
        backgroundColor: 'white',
        // borderWidth: 1,
        width: width ?? '30%',
        height: height ?? 150,
        padding: 5,
        marginBottom: 10, // FIXME: 레이아웃 관련된 속성이라, 여기서는 뺄 예정!
        marginRight: 10, // FIXME: 
        shadowOffset: { width: 1, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4 // 안드로이드에서만 사용
      }}
    >
      <Text
        style={{
          fontSize: 15,
          color: '#6E6E6D',
          fontFamily: 'NotoSerifKR-Regular'
        }}
      >{title}</Text>
    </View>
  )
}

export default BookShape
