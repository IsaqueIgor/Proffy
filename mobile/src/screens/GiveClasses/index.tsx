import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import { giveClassesBgImage } from '../../assets/images';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Do you want to be a Proffy?</Text>
        <Text style={styles.description}>
          First, you need to register as a Tutor in our App.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Confirm</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
