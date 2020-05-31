import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

import styles from './styles';
import Spinner from '../Spinner';

const Container: React.FC = ({ children }: PropsWithChildren<{}>) => {
  return (
    <View style={styles.container}>
      <Spinner />
      {children}
    </View>
  );
};

export default Container;
