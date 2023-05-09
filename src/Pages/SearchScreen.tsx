import React from 'react';
import { View } from 'react-native';

import ScreenLayout from '../Components/ScreenLayout';
import SearchInput from '../Components/SearchInput';

const SearchScreen = () => {
  const handleSubmit = (search: string) => {
    // connect api with search string
  };

  return (
    <ScreenLayout>
      <View>
        <SearchInput handleSubmit={handleSubmit} />
      </View>
    </ScreenLayout>
  );
};

export default SearchScreen;
