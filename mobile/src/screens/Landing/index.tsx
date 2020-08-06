import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { studyIcon, giveClassIcon, heartIcon } from '../../assets/images/icons';
import { LandingImg } from '../../assets/images';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome, {'\n'}
        <Text style={styles.titleBold}>What are you looking for?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Study</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassIcon} />

          <Text style={styles.buttonText}>Be a Tutor</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Over 200 connections already made <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
