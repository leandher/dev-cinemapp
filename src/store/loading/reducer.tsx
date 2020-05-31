import { LOADING } from './action';

const initialState = {
  isLoading: false,
};

export default function reducer(
  state = initialState,
  action: { type: string; payload: { isLoading: boolean } }
) {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
