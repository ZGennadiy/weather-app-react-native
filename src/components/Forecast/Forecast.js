import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { Context } from '../../context';
import { styles } from './styles.js';


export const Forecast = () => {
  const { weather } = useContext(Context);
  const [day1, day2, day3] = weather.forecast.forecastday;

  const daylyMap = (dayData) => {
    const { icon, text } = dayData.day.condition;
    const iconSource = `http:${icon}`;
    const { avgtemp_c, maxtemp_c, mintemp_c, daily_chance_of_rain, daily_chance_of_snow } =  dayData.day;
    const { date } = dayData;
    const [, month, day] = date.split('-');

    return (
      <View style={{...styles.weather, ...styles.weatherDayly}} key={`${day}${month}`}>
          <Text style={styles.weatherDay}>{`${day} / ${month}`}</Text>
        <View style={styles.weatherWrapper}>
          <View style={styles.weatherMain}>
            <Image 
              style={styles.weatherIcon}
              source={{ uri: iconSource, }}
              alt={`${day} ${month} weather icon`}
            />
            <Text style={styles.weatherTemperature}>
              {Math.floor(avgtemp_c)}&deg;C
            </Text>
          </View>
          <View style={{...styles.weatherInfo, ...styles.forecastWeatherInfo}}>
            <Text style={styles.weatherInfoDescr}>Мин: {Math.floor(mintemp_c)}&deg;C</Text>
            <Text style={styles.weatherInfoDescr}>Макс: {Math.floor(maxtemp_c)}&deg;C</Text>
            <Text style={styles.weatherInfoDescr}>{`Осадки: ${Math.max(daily_chance_of_rain, daily_chance_of_snow)}%`}</Text>
          </View>
        </View>
        <View style={{...styles.weatherDescr, ...styles.forecastWeatherDescr}}>
          <Text style={styles.weatherDescription}>{text}</Text>
        </View> 
      </View>
    )
  };

  return (
    <View style={styles.weatherForecastDayly}>
      {[day1, day2, day3].map(daylyMap)}
    </View>
  )
}