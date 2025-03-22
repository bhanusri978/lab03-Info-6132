import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from '../screens/BookListScreen';
import BookDetailScreen from '../screens/BookDetailsScreen';
import BorrowedBooksScreen from '../screens/BorrowedBooksScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen
        name="BookList"
        component={BookListScreen}
        options={{ title: 'Books Library' }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{ title: 'Book Detail' }}
      />
      <Stack.Screen
        name="BorrowedBooks"
        component={BorrowedBooksScreen}
        options={{ title: 'Borrowed Books' }}
      />
    </Stack.Navigator>
  );
}
