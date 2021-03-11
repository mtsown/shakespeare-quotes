import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('./assets/images/portrait.jpg')}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>daily{'\n'}shakespeare's{'\n'}quotes</Text>
      </View>
      <View style={styles.scrollWrapper}>
        <ImageBackground style={styles.scroll} source={require('./assets/images/scroll.png')} >
          <Text style={styles.scrollText}>presseth{'\n'}me!</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#000000',
    borderWidth: 3,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DawningofaNewDay-Regular',
    fontSize: 56,
    lineHeight: 56,
    textAlign: 'center',
  },
  scrollWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollText: {
    fontFamily: 'DawningofaNewDay-Regular',
    fontSize: 42,
    lineHeight: 42,
    textAlign: 'center',
  },
});

export default App;
