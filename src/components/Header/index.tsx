import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>
        {subtitle}
      </Text>
    </View>
  );
};

export default Header;
