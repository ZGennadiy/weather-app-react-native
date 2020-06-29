import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { Context } from '../../context';
import { Forecast } from '../Forecast/Forecast';
import { styles } from './styles.js';
import useSearch from '../../assets/useSearch.png';


export const Weather = () => {
  const { weather } = useContext(Context);
  if (weather.current) {
    const { temp_c, feelslike_c, wind_kph, humidity } = weather.current;
    const { icon, text } = weather.current.condition;
    const iconSource = `http:${icon}`;
    
    return (
      <View style={styles.mainWeatherWrapper}>
        <View style={styles.weather}>
          <View style={styles.weatherWrapper}>
            <View style={styles.weatherMain}>
              <Image 
                style={styles.weatherIcon}
                source={{ uri: iconSource, }}
                alt="Current weather icon"
              />
              <Text style={styles.weatherTemperature}>
                {Math.floor(temp_c)}&deg;C
              </Text>
            </View>
            <View style={styles.weatherInfo}>
              <Text style={styles.weatherInfoDescr}>{`Ощущается как ${Math.floor(feelslike_c)}`}&deg;C</Text>
              <Text style={styles.weatherInfoDescr}>{`Ветер ${wind_kph} км/ч`}</Text>
              <Text style={styles.weatherInfoDescr}>{`Влажность ${humidity}%`}</Text>
            </View>
          </View>
          <View style={styles.weatherDescr}>
          <Text style={styles.weatherDescription}>{text}</Text>
          </View> 
          </View>
          <View style={styles.hr}/>
        <Forecast/>
      </View>
    );
  }

  return (
    <View style={{...styles.weather, ...styles.weatherUseSearchWrap}}>
      <Image source={useSearch} style={styles.weatherUseSearch}/>
    </View>
  );
};
