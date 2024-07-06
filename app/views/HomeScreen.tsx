import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../styles/colors';
import {getNews} from '../apis/newsApi';
import {useQuery} from 'react-query';
import NewsItem from './components/NewsItem';

interface FeedProps {
  query: string;
}

const Feed = ({query}: FeedProps) => {
  const {isLoading, error, data, refetch} = useQuery(
    ['newsData', query],
    async () => {
      const data = await getNews(query);
      return data;
    },
  );
  useEffect(() => {
    refetch();
  }, [query]);

  if (isLoading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text>An error has occurred: {error.message}</Text>;

  if (!data) {
    return null;
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data.articles}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <NewsItem
            title={item.title}
            description={item.description}
            date={item.publishedAt}
            imageUri={item.urlToImage}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const MemoizedFeed = React.memo(Feed);

export default function HomeScreen() {
  const [inputValue, setInputValue] = React.useState('');
  const [query, setQuery] = React.useState('');

  const searchNews = async () => {
    setQuery(inputValue);
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.searchInputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.input}
          testID="search-input"
        />
        <TouchableOpacity onPress={searchNews} testID="search-button">
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
    return <MemoizedFeed query={query} />;
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
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  loadingText: {
    alignSelf: 'center',
  },
});
