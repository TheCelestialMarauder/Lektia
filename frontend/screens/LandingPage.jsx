import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '@styles/LandingPage.styles';

const LandingPage = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bienvenido a Lektia 📚</Text>

      <Text style={styles.description}>
        Lektia es tu biblioteca personal digital. Guarda tus lecturas, escribe reseñas, descubre libros y comparte tus favoritos. Todo en una sola app.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.storeButton, styles.iosButton]}
          onPress={() => handlePress('https://www.apple.com/es/app-store/')}
        >
          <Text style={styles.storeButtonText}>Descargar en App Store</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.storeButton, styles.androidButton]}
          onPress={() => handlePress('https://play.google.com/store')}
        >
          <Text style={styles.storeButtonText}>Disponible en Google Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;
