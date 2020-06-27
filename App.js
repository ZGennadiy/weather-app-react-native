import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { DisplayWeather } from './src/components/DisplayWeather/DisplayWeather';
import { Footer } from './src/components/Footer/Footer';
import bg from './src/assets/bg.jpg';

export default function App() {

  return (
    <ImageBackground source={bg} style={styles.bgImage} >
    <StatusBar backgroundColor="white" hidden={true} barStyle="dark-content"/>
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <DisplayWeather/>
        </View>
      </ScrollView>
        <Footer/>
    </ImageBackground>
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
