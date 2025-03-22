import React, { createContext, useState } from 'react';

// Create the Context object
export const BorrowedBooksContext = createContext();

// Create a Provider component
export function BorrowedBooksProvider({ children }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, setBorrowedBooks }}>
      {children}
    </BorrowedBooksContext.Provider>
  );
}
