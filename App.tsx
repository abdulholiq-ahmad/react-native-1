// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You clicked {count} times</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Add one</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleHidden()}>
        <Text style={styles.buttonText}>Toggle</Text>
      </Pressable>
      <StatusBar barStyle="light-content" hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'indigo',
    fontSize: 18,
  },
});
export default App;
