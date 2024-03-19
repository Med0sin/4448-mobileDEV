import React from 'react';
import { View } from 'react-native';
import Menu from './Menu';
import LandingPage from './LandingPage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import CandySearchPage from './CandySearchPage';

export default function App() {
  return (
    <View>
      <Menu loggedIn={false} /> {/* Change loggedIn value as per your requirement */}
      <LandingPage />
      <RegistrationPage />
      <LoginPage />
      <CandySearchPage />
    </View>
  );
}
