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

function TutorList() {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((tutor: Tutor) => {
          return tutor.id;
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
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
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholderTextColor='#c1bccc'
              style={styles.input}
              placeholder='What is the Subject?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Day'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Time'
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </ScreenHeader>
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

export default TutorList;
