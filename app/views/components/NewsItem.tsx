import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/colors';

interface NewsItemProps {
  title: string;
  description: string;
  date: string;
  imageUri: string;
}

export default function NewsItem({
  title,
  description,
  date,
  imageUri,
}: NewsItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});
