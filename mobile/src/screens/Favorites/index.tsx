import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { ScreenHeader, Tutor, TutorItem } from '../../components';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

function Favorites() {
  const [favorites, setFavorites] = useState<[]>([]);
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <ScreenHeader title='My favorites proffys' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((tutor: Tutor) => {
          return <TutorItem key={tutor.id} tutor={tutor} favorited />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
