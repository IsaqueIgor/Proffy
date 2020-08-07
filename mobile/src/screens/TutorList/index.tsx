import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { ScreenHeader } from '../../components';

import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TutorItem, Tutor } from '../../components';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  return (
    <View style={styles.container}>
      <ScreenHeader
        title='Proffys Availiable'
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        }
      ></ScreenHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {teachers.map((tutor: Tutor) => (
          <TutorItem
            key={tutor.id}
            tutor={tutor}
            favorited={favorites.includes(tutor.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
