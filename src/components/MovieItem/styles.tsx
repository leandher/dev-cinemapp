import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  moviesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 10,
    backgroundColor: '#282a36',
    padding: 16,
    borderRadius: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
  },
  movie: {
    flexDirection: 'row',
    width: '75%',
  },
  movieTitle: {
    fontWeight: 'bold',
    color: '#f8f8f2',
  },
  movieImage: {
    borderRadius: 10,
    marginRight: 10,
  },
  movieInformation: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  movieYear: {
    color: '#f8f8f2',
  },
});
