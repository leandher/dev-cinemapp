import { Dispatch } from 'redux';

import {
  RequestSearchAction,
  REQUEST_MOVIES,
  GetSearchAction,
  GET_MOVIES,
} from '../../@types/search.d';
import { Movie } from '../../@types/movie';
import api from '../../services/api';

import { loading } from '../loading/action';
import { State } from '../../@types/store';
import { updateIsFavorite } from '../../common/helpers.functions';

function request(): RequestSearchAction {
  return {
    type: REQUEST_MOVIES,
  };
}

export function get(movies: Movie[], totalMovies: number, status?: string): GetSearchAction {
  return {
    type: GET_MOVIES,
    payload: {
      movies,
      status,
      totalMovies,
    },
  };
}

export function search(options: { keyword: string; page?: number }) {
  return async function (dispatch: Dispatch, getState: () => State) {
    dispatch(request());

    try {
      dispatch(loading(true));

      const { keyword, page } = options;

      const response = await api.get(`&s=${keyword}&type=movie&page=${page}`);
      const { data } = response;
      const {
        favorites: { favorites },
      } = getState();

      dispatch(loading(false));

      const movies: Movie[] = updateIsFavorite(data.Search || [], favorites);

      return dispatch(get(movies, data.totalResults));
    } catch (error) {
      return dispatch(get([], 0,error));
    }
  };
}
