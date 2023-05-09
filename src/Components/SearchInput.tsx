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
    borderBottomWidth: 0,
    borderTopWidth: 0,
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
  },
  inputContainer: { backgroundColor: 'white', borderRadius: 5 },
  input: { color: '#FAD0C9' },
});

export default SearchInput;
