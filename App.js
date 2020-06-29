import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { Context } from './src/context';
import { Search } from './src/components/Search/Search';
import { Location } from './src/components/Location/Location';
import { Weather } from './src/components/Weather/Weather';
import { Footer } from './src/components/Footer/Footer';

import bg from './src/assets/bg.jpg';

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  return (
    <Context.Provider value={{query, setQuery, weather, setWeather}}>
      <ImageBackground source={bg} style={styles.bgImage}>
        <StatusBar backgroundColor="white" hidden={true} barStyle="dark-content"/>
        <ScrollView>
          <View style={styles.main}>
            <Search/>
            <Location/>
            <Weather/>
          </View>
        </ScrollView>
        <Footer/>
      </ImageBackground>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 25,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
