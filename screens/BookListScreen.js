import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { getAvailableBooks } from '../firebase/database';
import styles from '../styles/BookListScreenStyles';

export default function BookListScreen({ navigation }) {
  const [books, setBooks] = useState({});

  useEffect(() => {
    getAvailableBooks((data) => {
      setBooks(data || {});
    });
  }, []);

  const booksArray = Object.keys(books).map(key => ({ key, ...books[key] }));

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item, bookId: item.key })}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={booksArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <Button title="View Borrowed Books" onPress={() => navigation.navigate('BorrowedBooks')} />
    </View>
  );
};
