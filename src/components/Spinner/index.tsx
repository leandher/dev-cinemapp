import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';
import { State } from '../../@types/store';

const Spinner = () => {
  const isLoading = useSelector((state: State) => state.loading.isLoading);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F5C518" />
    </View>
  ) : (
    <></>
  );
};

export default React.memo(Spinner);
