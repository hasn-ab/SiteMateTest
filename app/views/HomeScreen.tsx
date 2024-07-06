import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.input}
        />
      </View>
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
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
