import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  heartOutline,
  unFavorite,
  whatsappIcon,
} from '../../assets/images/icons';

import styles from './styles';

import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

export interface Tutor {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  rating: number;
  subject: string;
  whatsapp: string;
}

interface TutorItemProps {
  tutor: Tutor;
  favorited: boolean;
}

const TeacherItem: React.FC<TutorItemProps> = ({ tutor, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: tutor.id,
    });

    Linking.openURL(`whatsapp://send?phone=${tutor.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray: Tutor[] = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      favoritesArray = favoritesArray.filter(
        (teacherItem) => teacherItem.id !== tutor.id
      );
    } else {
      favoritesArray.push(tutor);
    }
    setIsFavorited(!isFavorited);
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: tutor.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{tutor.name}</Text>
          <Text style={styles.subject}>{tutor.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{tutor.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/Hour {'   '}
          <Text style={styles.priceValue}>R$ {tutor.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unFavorite} />
            ) : (
              <Image source={heartOutline} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in Touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
