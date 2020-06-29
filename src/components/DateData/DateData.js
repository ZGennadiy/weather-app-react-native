import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';


export const DateData = () => {
  const dateBuilder = (date) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const currentDay = days[date.getDay()];
    const currentDate = date.getDate();
    const currentMonth = months[date.getMonth()];
    const currentYear = date.getFullYear();

    return `${currentDay} ${currentDate} ${currentMonth} ${currentYear}`;
  };

  return (
    <Text style={styles.date}>
      {dateBuilder(new Date())}
    </Text>
  );
};
