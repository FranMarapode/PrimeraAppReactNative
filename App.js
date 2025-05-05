import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function handleButton() {
    setCount(count + 1);
  }

  return (
    <ImageBackground source={require('./assets/fondo.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Primera App React Native</Text>
        <StatusBar style="light" />
        <Button onPress={handleButton} title="Cambiar Variable" color="green" />
        <Text style={styles.count}>{count}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  count: {
    fontSize: 25,
    color: 'white',
    marginTop: 10,
  }
});