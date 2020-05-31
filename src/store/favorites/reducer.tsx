import {
  GET_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FavoriteState,
  FavoriteAction,
} from '../../@types/favorite.d';

const initialState: FavoriteState = {
  favorites: [],
};

export default function reducer(
  state = initialState,
  action: FavoriteAction
): FavoriteState {
  switch (action.type) {
    case GET_FAVORITE:
    case ADD_FAVORITE:
    case REMOVE_FAVORITE:
      return {
        favorites: action.payload?.favorites || [],
      };

    default:
      return state;
  }
}
