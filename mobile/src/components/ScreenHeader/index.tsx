import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { back } from '../../assets/images/icons';
import { Logo } from '../../assets/images';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={back} resizeMode='contain' />
        </BorderlessButton>

        <Image source={Logo} resizeMode='contain' />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        {props.headerRight}
      </View>

      {props.children}
    </View>
  );
};

export default PageHeader;
