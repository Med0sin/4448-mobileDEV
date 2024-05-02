import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const uploadImageAsync = async () => {
    if (!selectedImage) {
      return;
    }

    // You can add your image upload logic here
    // For example, you can use fetch or a library like axios to send the image to your server

    Alert.alert('Image uploaded successfully!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Image source={require('./assets/upload_icon.png')} style={styles.uploadIcon} />
      </TouchableOpacity>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.image} />
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImageAsync}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  uploadButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageUploadScreen;
