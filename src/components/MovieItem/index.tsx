import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Movie } from '../../@types/movie';

import styles from './styles';
import Icon from '../Icon';

interface MovieItemProps {
  movie: Movie;
  selected: boolean;
  onFavorite: (movie: Movie) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  onFavorite,
  selected,
}: MovieItemProps) => {
  return (
    <View style={styles.moviesContainer}>
      <View style={styles.movie}>
        <Image
          source={{ uri: movie.Poster, height: 50, width: 50 }}
          style={styles.movieImage}
        />
        <View style={styles.movieInformation}>
          <Text style={styles.movieTitle}>{movie.Title}</Text>
          <Text style={styles.movieYear}>Ano: {movie.Year}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onFavorite(movie)}>
        <Icon name={selected ? 'star' : 'star-o'} size={28} color="#f8f8f2" />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(MovieItem);
