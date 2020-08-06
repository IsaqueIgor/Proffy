import React from 'react';
import { View } from 'react-native';

import { ScreenHeader } from '../../components';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <ScreenHeader title='Proffys Availiable' />
    </View>
  );
}

export default TeacherList;
