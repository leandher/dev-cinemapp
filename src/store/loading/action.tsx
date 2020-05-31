export const LOADING = 'LOADING';

export function loading(isLoading: boolean) {
  return {
    type: LOADING,
    payload: {
      isLoading,
    }
  }
}