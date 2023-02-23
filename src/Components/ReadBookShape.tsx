import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

type BookType = {
  id: number;
  title: string;
  pages: number;
};

type PropsType = {
  readBooks: Array<BookType>;
};

const ReadBookShape = (props: PropsType) => {
  const { readBooks } = props;

  return (
    <ScrollView horizontal={true}>
      {readBooks.map((book, i) => {
        const backgroundColor = i % 2 === 0 ? '#A8A8A8' : undefined;
        const fontColor = i % 2 === 0 ? '#F7F7F7' : '#A8A8A8';
        const width = book.pages / 8;

        return (
          <View
            style={{
              ...styles.book,
              width: width,
              backgroundColor: backgroundColor,
            }}
            key={book.title}
            nativeID={book.title}>
            <Text style={{ ...styles.title, color: fontColor }}>
              {book.title}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  book: {
    width: 50, // default width
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A8A8A8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 10,
    color: '#B0918C',
    // transform: [{ rotate: '90deg' }],
  },
});

export default ReadBookShape;
