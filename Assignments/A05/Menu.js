import React from 'react';
import { View, Text } from 'react-native';

const Menu = ({ loggedIn }) => {
  return (
    <View>
      {loggedIn ? (
        <Text>Logged In Menu</Text>
      ) : (
        <Text>Not Logged In Menu</Text>
      )}
    </View>
  );
};

export default Menu;

