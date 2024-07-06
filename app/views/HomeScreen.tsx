import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../styles/colors';

export default function HomeScreen() {
  const [inputValue, setInputValue] = React.useState('');

  const renderLoading = () => {};

  const searchNews = () => {};

  const renderSearchBar = () => {
    return (
      <View style={styles.searchInputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.input}
        />
        <TouchableOpacity onPress={searchNews}>
          <Image
            source={require('../assets/search.png')}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderNewsFeed = () => {
    return null;
  };

  return (
    <View style={styles.container}>
      {renderSearchBar()}
      {renderNewsFeed()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 10,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  input: {
    height: 40,
    width: '80%',
  },
  searchIconContainer: {
    backgroundColor: 'grey',
  },
});
