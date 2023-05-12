import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SEARCH_URL } from 'react-native-dotenv';

import ScreenLayout from '../Components/ScreenLayout';
import SearchInput from '../Components/SearchInput';

import { ItemType } from '../types';

const SearchScreen = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const handleSubmit = (search: string) => {
    fetch(`${SEARCH_URL}${search}`)
      .then(res => res.json())
      .then(jsonData => {
        setItems(jsonData.item);
      })
      .catch(err => console.error(err));
  };

  return (
    <ScreenLayout>
      <SearchInput handleSubmit={handleSubmit} />
      {items.map(item => {
        const { title, cover, publisher, author, description } = item;
        const formattedAuthor = author.split(', ')[0].split('(')[0];

        return (
          <View key={title} style={styles.item}>
            <Image source={{ uri: cover }} style={styles.image} />
            <View style={styles.textContainer}>
              <View style={styles.bookHeader}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>
                  {publisher} / {formattedAuthor}
                </Text>
              </View>
              <Text style={styles.details} numberOfLines={3}>
                {description}
              </Text>
            </View>
          </View>
        );
      })}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  item: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  image: { width: 67, height: '100%', marginRight: 5 },
  textContainer: { flex: 1, height: '100%', width: '100%' },
  bookHeader: { marginBottom: 5 },
  title: { fontSize: 14 },
  author: { fontSize: 12, color: '#A8A8A8' },
  details: {
    fontSize: 12,
    color: '#A8A8A8',
    flex: 1,
  },
});

export default SearchScreen;
