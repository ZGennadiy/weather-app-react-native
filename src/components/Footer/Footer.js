import React from 'react';
import { Text, View} from 'react-native';
import { styles } from './styles';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Developed by Zgennadiy.com
      </Text>
      <Text style={styles.text}>
        Powered by WeatherAPI.com
      </Text>
    </View>
  )
}
