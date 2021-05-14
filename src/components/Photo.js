import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export function Photo({ file, count }) {
  const [like, setLike] = useState(count);

  const increment = () => {
    setLike(like + 1);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={file} />

      <TouchableOpacity onPress={increment}>
        <Text style={styles.counter}>{like} Like</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'green',
  },
  counter: {
    fontSize: 30,
    color: 'pink',
  },
  image: {
    height: 250,
    width: 250,
  },
});
