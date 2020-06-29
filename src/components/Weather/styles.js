import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  weatherDay: {
    color: '#fff',
    fontWeight: '700',
  },

  mainWeatherWrapper: {
    alignItems: 'center',
  },
  
  weather: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: "#fff",
    marginVertical: 30,
    paddingVertical: 15, 
    paddingHorizontal: 25,
    fontWeight: '900',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
  },

  weatherWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
  weatherMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  weatherIcon: {
    height: 60,
    width: 60,
  },
  
  weatherTemperature: {
    fontSize: 30,
    color: 'white',
    textAlign: "center",
  },

  weatherInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  
  weatherInfoDescr: {
    color: 'white',
  },

  weatherDescr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  
  weatherDescription: {
    fontSize: 18,
    textAlign: "center",
    color: 'white',
  },
  
  weatherForecastDayly: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
  },

  weatherDayly: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
    maxWidth: 300,
  },

  forecastWeatherInfo: {
    alignItems: 'flex-start',
  },

  forecastWeatherDescr: {
    marginBottom: 0,
  },

  weatherUseSearchWrap: {
    flexDirection: 'row',
  },

  weatherUseSearch: {
    width: 150,
    height: 150,
  },
  
  hr: {
    color: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    borderWidth: 2,
    minHeight: 3, 
    marginBottom: 30,
  },
});