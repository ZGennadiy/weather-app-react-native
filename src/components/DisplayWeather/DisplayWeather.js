import React, { useState } from 'react';
import api from '../API/api';
import { Text, View, TextInput, Image } from 'react-native';
import { styles } from './styles';

import useSearch from '../../assets/useSearch.png';

export const DisplayWeather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const { key, http, https } = api;
  
  const search = () => {
    if (query !== '') {
      fetch(`${https}key=${key}&q=${query}&lang=ru&days=3`)
      .then((res) => res.json())
      .then((result) => {
          setWeather(result);
          if (!result.error) {
            setQuery('');
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const dateBuilder = (date) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const currentDay = days[date.getDay()];
    const currentDate = date.getDate();
    const currentMonth = months[date.getMonth()];
    const currentYear = date.getFullYear();

    return `${currentDay} ${currentDate} ${currentMonth} ${currentYear}`;
  };

  const chosenLocation = (data) => {
    if (data.location) {
      const { name, country } = data.location
      return `${name}, ${country}`
    } else if (data.error) {
      return `${data.error.message}`
    }
    return `Воспользуйтесь поиском, чтобы получить информацию о погоде`;
  }

  const getForecast = (forecastData) => {
    if (forecastData.current) {
      const { temp_c, feelslike_c, wind_kph, humidity } = forecastData.current;
      const { icon, text } = forecastData.current.condition;
      const iconSource = `http:${icon}`;
      const [day1, day2, day3] = forecastData.forecast.forecastday;
      
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
      }

      return (
        <>
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
          <View style={styles.weatherForecastDayly}>
            {[day1, day2, day3].map(daylyMap)}
          </View>
        </>
      );
    }

    return (
      <View style={styles.weather}>
        <Image source={useSearch} style={styles.weatherUseSearch}/>
      </View>
    );
  }

    return (
      <>
        <View style={styles.search}>
          <TextInput 
            style={styles.searchBar}
            placeholder="Search..."
            textAlign="center"
            onChange={({ nativeEvent }) => setQuery(nativeEvent.text)}
            value={query}
            onEndEditing={() => search()}
          />
        </View>
        <View style={styles.location}>
          <Text style={styles.locationCity}>
            {chosenLocation(weather)}
          </Text>
          <Text style={styles.date}>
            {dateBuilder(new Date())}
          </Text>
        </View>
        <View style={styles.mainWeatherWrapper}>
          {getForecast(weather)}
        </View>
      </>
  );
}

