import React from 'react';
import { View } from 'react-native';

import { ScreenHeader } from '../../components';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <ScreenHeader title='My favorites proffys' />
    </View>
  );
}

export default Favorites;
