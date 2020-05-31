import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { MovieItem, Container, Header } from '../../components';

import { Movie } from '../../@types/movie';
import { State } from '../../@types/store';
import {
  addToStorage,
  loadFromStorage,
  removeFromStorage,
} from '../../store/favorites/action';
import { search } from '../../store/search/action';

import styles from './styles';

const Home: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { movies, totalMovies } = useSelector((state: State) => state.search);
  const isLoading = useSelector((state: State) => state.loading.isLoading);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (isLoading) return;

    if (totalMovies > 0 && movies.length === totalMovies) return;

    dispatch(search({ keyword, page: currentPage }));

    setCurrentPage(currentPage + 1);
  };

  const handleFavorite = (movie: Movie) => {
    dispatch(
      movie.isFavorite ? removeFromStorage(movie.imdbID) : addToStorage(movie)
    );
  };

  useEffect(() => {
    dispatch(loadFromStorage());
  }, []);

  return (
    <Container>
      <Header
        title="Cinema App"
        subtitle="Bem-vindo ao mundo espetacular do cinema."
      />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="O que você busca..."
          style={styles.searchInput}
          onChangeText={(text) => setKeyword(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.movies}
        data={movies}
        keyExtractor={(movie) => movie.imdbID}
        showsVerticalScrollIndicator={false}
        onEndReached={handleSearch}
        onEndReachedThreshold={0.2}
        renderItem={({ item: movie }) => (
          <MovieItem
            movie={movie}
            onFavorite={handleFavorite}
            selected={!!movie.isFavorite}
          />
        )}
      />
    </Container>
  );
};

export default Home;
