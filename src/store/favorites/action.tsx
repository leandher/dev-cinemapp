import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { updateIsFavorite } from '../../common/helpers.functions';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FavoriteAction,
  GET_FAVORITE,
  REQUEST_FAVORITE,
  REQUEST_ADD_FAVORITE,
  REQUEST_REMOVE_FAVORITE,
} from '../../@types/favorite.d';
import { Movie } from '../../@types/movie';
import { State } from '../../@types/store';

import { get as loadMovies } from '../search/action';

function add(favorites: Movie[], status?: string): FavoriteAction {
  return {
    type: ADD_FAVORITE,
    payload: {
      favorites,
      status,
    },
  };
}

function remove(favorites: Movie[], status?: string): FavoriteAction {
  return {
    type: REMOVE_FAVORITE,
    payload: {
      favorites,
      status,
    },
  };
}

function get(favorites: Movie[], status?: string): FavoriteAction {
  return {
    type: GET_FAVORITE,
    payload: {
      favorites,
      status,
    },
  };
}

function request(): FavoriteAction {
  return {
    type: REQUEST_FAVORITE,
  };
}

function requestAdd(): FavoriteAction {
  return {
    type: REQUEST_ADD_FAVORITE,
  };
}

function requestRemove(): FavoriteAction {
  return {
    type: REQUEST_REMOVE_FAVORITE,
  };
}

export function loadFromStorage() {
  return async function (dispatch: Dispatch) {
    dispatch(request());

    try {
      const favoritesStored = await AsyncStorage.getItem('@favorites');
      const favorites = JSON.parse(favoritesStored || '[]');

      return dispatch(get(favorites as Movie[]));
    } catch (error) {
      return dispatch(get([], error));
    }
  };
}

export function removeFromStorage(imdbID: string) {
  return async function (dispatch: Dispatch, getState: () => State) {
    const state = getState();
    const {
      favorites,
      search: { movies, totalMovies },
    } = state;

    dispatch(requestRemove());

    try {
      const newFavorites = favorites.favorites.filter(
        (movie: Movie) => movie?.imdbID !== imdbID
      );
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));

      dispatch(loadMovies(updateIsFavorite(movies, newFavorites), totalMovies));
      return dispatch(remove(newFavorites));
    } catch (error) {
      return dispatch(remove([], error));
    }
  };
}

export function addToStorage(movie: Movie) {
  return async function (dispatch: Dispatch, getState: () => State) {
    const state = getState();
    const {
      favorites,
      search: { movies, totalMovies },
    } = state;

    dispatch(requestAdd());

    try {
      const newFavorites = [...favorites.favorites, movie];
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));

      dispatch(loadMovies(updateIsFavorite(movies, newFavorites), totalMovies));

      return dispatch(add(newFavorites));
    } catch (error) {
      return dispatch(add([], error));
    }
  };
}
