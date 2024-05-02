import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Animated, Easing, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomBar from '../../my-new-app/bottomMenu'; // Import the BottomBar component

export default function HomePage({ navigation }) {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    const spin = () => {
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      ).start(() => {
        spinValue.setValue(0);
        spin(); // Recursive call to spin again
      });
    };

    spin(); // Initial call to start spinning
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleSignUp = () => {
    navigation.navigate('Registration'); // Navigate to the Registration screen
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleChat = () => {
    navigation.navigate('Chat');
  };

  const handleImageUpload = () => {
    navigation.navigate('ImageUpload'); // Navigate to the ImageUpload screen
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/RockashotsLogo.png')}
        style={[styles.image, { transform: [{ rotate: spin }] }]}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChat}>
          <Ionicons name="chatbox" size={32} color="black" />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Ionicons name="person-add" size={32} color="black" />
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Ionicons name="log-in" size={32} color="black" />
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
          <Ionicons name="image" size={32} color="black" />
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      <BottomBar />

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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 40,
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginLeft: 10,
    width: 100,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center', // Add textAlign to center the text
  },
});
