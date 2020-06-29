import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context } from '../../context';
import { DateData } from '../DateData/DateData';
import { styles } from './styles.js';


export const Location = () => {
  const { weather } = useContext(Context);

  const chosenLocation = (data) => {
    if (data.location) {
      const { name, country } = data.location
      return `${name}, ${country}`
    } else if (data.error) {
      return `${data.error.message}`
    }
    return 'Воспользуйтесь поиском, чтобы получить информацию о погоде';
  }


  return (
    <View style={styles.location}>
      <Text style={styles.locationCity}>
        {chosenLocation(weather)}
      </Text>
      <DateData/>
    </View>
  );
};
