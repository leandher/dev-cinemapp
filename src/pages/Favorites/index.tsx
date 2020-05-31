import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Header, MovieItem } from '../../components';

import { Movie } from '../../@types/movie';

import { loadFromStorage, removeFromStorage } from '../../store/favorites/action';
import styles from './styles';
import { State } from '../../@types/store';

const Favorites: React.FC = () => {
  const favorites: Movie[] = useSelector(
    (state: State) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  const handleFavorite = (movie: Movie) => {
    dispatch(removeFromStorage(movie.imdbID));
  };

  useEffect(() => {
    dispatch(loadFromStorage());
  }, []);

  return (
    <Container>
      <Header
        title="Cinema App - Favoritos"
        subtitle="Bem-vindo ao mundo espetacular do cinema."
      />
      <FlatList
        style={styles.movies}
        data={favorites}
        keyExtractor={(favorite) => favorite.imdbID}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: favorite }) => (
          <MovieItem movie={favorite} onFavorite={handleFavorite} selected />
        )}
      />
    </Container>
  );
};

export default Favorites;
