import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    borderRadius: 10,
    backgroundColor: '#F5C518',
    padding: 10,
    borderColor: '#000',
  },
  searchButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '70%',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#FAFAFA',
  },
  movies: {
    marginVertical: 16,
  },
});
