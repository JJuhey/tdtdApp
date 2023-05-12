import React, { useState } from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { SearchBar } from '@rneui/themed';

type PropsType = {
  handleSubmit: (search: string) => void;
};

const SearchInput = ({ handleSubmit }: PropsType) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder="어떤 책을 읽으셨나요?"
      placeholderTextColor="#FAD0C9"
      value={search}
      onChange={handleChange}
      onSubmitEditing={() => handleSubmit(search)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    marginBottom: 20,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  inputContainer: { backgroundColor: 'white', width: '100%' },
  input: { color: '#FAD0C9', fontSize: 15, width: '100%' },
});

export default SearchInput;
