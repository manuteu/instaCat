import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export function Logo() {
  return (
    <View>
      <Text style={styles.logo}>Insta cat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 40,
  },
});
