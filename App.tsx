import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 220
  const hrLimitUpper: number = (220 - ageAsNumber) * 0.85
  const hrLimitLower: number = (220 - ageAsNumber) * 0.65

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.smallTitle}>Enter your age:</Text>
      <TextInput style={styles.textInput}
        placeholder="0"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.text}>{hrLimitUpper.toFixed(0)} Upper limit:</Text>
      <Text style={styles.text}>{hrLimitLower.toFixed(0)} Lower limit:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 24,
    marginTop: 34,
    marginBottom: 16
  },
  smallTitle: {
    marginVertical: 22,
    fontSize: 16
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    width: 100,
    marginBottom: 16,
    fontSize: 18
  },
  text: {
    marginVertical: 6,
    fontSize: 16
  },
});
