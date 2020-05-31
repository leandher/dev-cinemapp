import { Movie } from './movie';

export const GET_FAVORITE = 'GET_FAVORITE';
export const REQUEST_FAVORITE = 'REQUEST_FAVORITE';
export const REQUEST_ADD_FAVORITE = 'REQUEST_ADD_FAVORITE';
export const REQUEST_REMOVE_FAVORITE = 'REQUEST_REMOVE_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export interface FavoriteState {
  favorites: Movie[];
  status?: string;
}

interface GetFavoriteAction {
  type: typeof GET_FAVORITE;
  payload?: FavoriteState;
}

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: FavoriteState;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: FavoriteState;
}

interface RequestFavoriteAction {
  type: typeof REQUEST_FAVORITE | typeof REQUEST_ADD_FAVORITE | typeof REQUEST_REMOVE_FAVORITE;
}

export type FavoriteAction =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | RequestFavoriteAction
  | GetFavoriteAction;
