import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { Context } from '../../context';
import { api } from '../API/api';
import { styles } from './styles.js';

export const Search = () => {
  const { key , https } = api;
  const { query, setQuery, setWeather } = useContext(Context);

  const search = (evt) => {
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

  return (
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
  );
};

