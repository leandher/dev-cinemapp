import { Movie } from './movie';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const GET_MOVIES = 'GET_MOVIES';

export interface SearchState {
  movies: Movie[];
  totalMovies: number;
  status?: string;
}

interface RequestSearchAction {
  type: typeof REQUEST_MOVIES;
}

interface GetSearchAction {
  type: typeof GET_MOVIES;
  payload: SearchState;
}

export type SearchAction = RequestSearchAction | GetSearchAction;
