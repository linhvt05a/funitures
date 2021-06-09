//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import NotifiIcon from './src/assets/icons/bell.svg'
// create a component
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
      <NotifiIcon width={40} height={40}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;


