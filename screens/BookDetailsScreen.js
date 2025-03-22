import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { getBorrowedBooks, borrowBook } from '../firebase/database';
import styles from '../styles/BookDetailsScreenStyles'; 

export default function BookDetailScreen({ route, navigation }) {
  const { book, bookId } = route.params;
  const [borrowedCount, setBorrowedCount] = useState(0);

  useEffect(() => {
    getBorrowedBooks((data) => {
      const count = data ? Object.keys(data).length : 0;
      setBorrowedCount(count);
    });
  }, []);

  const handleBorrow = () => {
    if (borrowedCount >= 3) {
      Alert.alert('Limit Reached for borrow', 'You could not borrow more than 3 books at a time.');
    } else {
      borrowBook({ ...book, bookId });
      Alert.alert('Success', 'Book borrowed successfully!');
      navigation.navigate('BorrowedBooks');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Description: {book.description || 'No description available.'}</Text>
      <Button title="Borrow a Book" onPress={handleBorrow} />
    </View>
  );
};
