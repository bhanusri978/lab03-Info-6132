
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },


  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  bookImage: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 12,
  },

  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  author: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },

  // === Detail Screen ===
  detailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 16,
  },

  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  detailAuthor: {
    fontSize: 18,
    color: '#555',
    marginBottom: 12,
  },

  detailDescription: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 24,
  },

  borrowButton: {
    backgroundColor: '#2e86de',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  borrowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // === Borrowed Screen ===
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },

  returnButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ff7675',
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  returnButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
